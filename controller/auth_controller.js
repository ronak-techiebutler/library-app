import ApiError from "../utils/api_error.js";
import User from "../model/user.js";

const register = async (req, res, next) => {
  try {
    const user_data = req.body;

    let query = {
      email: user_data.email,
    };
    const find_user = await User.findOne({ where: query });

    if (find_user) {
      res
        .status(400)
        .json({ success: false, message: "user already exist", data: null });
    }

    const user = await User(user_data).save();

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
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    const userInfo = user.toObject();
    delete userInfo.password;

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: userInfo,
    });
  } catch (error) {
    console.error("Login error:", error);

    next(new ApiError(500, "Something went wrong"));
  }
};

export { register, login };
