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

const createBookSchema = {
  body: joi
    .object()
    .keys({
      title: joi.string().trim().required(),
      author: joi.string().trim().required(),
      genre: joi.string().trim().required(),
      publishedYear: joi.number().integer().min(1000).max(9999).required(),
      availableCopies: joi.number().integer().min(0).required(),
    })
    .unknown(false),
};

const getBookSchema = {
  query: joi
    .object()
    .keys({
      genre: joi.string().trim().optional(),
      author: joi.string().trim().optional(),
    })
    .unknown(false),
};

const borrowReturnBookSchema = {
  params: joi.object().keys({
    userId: joi.string().uuid().required(),
  }),
  body: joi
    .object()
    .keys({
      bookId: joi.string().uuid().required(),
    })
    .unknown(false),
};
export {
  registerSchema,
  loginSchema,
  createBookSchema,
  getBookSchema,
  borrowReturnBookSchema,
};
