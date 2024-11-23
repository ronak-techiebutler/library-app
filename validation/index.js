import joi from "joi";

const registerSchema = {
  body: joi
    .object()
    .keys({
      name: joi.string().trim().required(),
      email: joi.string().trim().required(),
      password: joi.string().trim().required(),
    })
    .unknown(false),
};

const loginSchema = {
  body: joi
    .object()
    .keys({
      email: joi.string().trim().required(),
      password: joi.string().trim().required(),
    })
    .unknown(false),
};

export { registerSchema, loginSchema };
