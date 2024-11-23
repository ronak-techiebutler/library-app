import Models from "../models/index.js";
import ApiError from "../utils/api_error.js";

const register = async (req, res, next) => {
  try {
    const user_data = req.body;

    let query = {
      email: user_data.email,
    };
    const find_user = await Models.user.findOne({ where: query });

    if (find_user) {
      res
        .status(400)
        .json({ success: false, message: "user already exist", data: null });
    }

    const user = await Models.user.create(user_data);

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error ::", error);

    throw new ApiError(500, "Something Wents wrong");
  }
};

const login = async (req, res, next) => {
  try {
    const user = await Models.user.findOne;

    const { email, password } = req.body;

    const user_data = await Models.user.findOne({ where: { email } });

    if (!user_data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const is_match = await user_data.isPasswordMatch(password);

    if (!is_match) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    const user_info = user_data.toJSON();
    delete user_info.password;
    const auth_tokens = await generateAuthTokens(user_data);

    res.status(200).json({
      success: true,
      message: "user Login successfully",
      data: { ...user_info, auth_tokens },
    });
  } catch (error) {
    console.log("error ::", error);

    throw new ApiError(500, "Something Wents wrong");
  }
};

export { register, login };
