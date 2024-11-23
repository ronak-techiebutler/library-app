import express from "express";
import validate from "../middlewares/validation.js";
import {
  borrowReturnBookSchema,
  createBookSchema,
  getBookSchema,
  loginSchema,
  registerSchema,
} from "../validation/index.js";
import {
  borrowBook,
  createBook,
  getBooks,
  returnBook,
} from "../controller/book_controller.js";

const route = express.Router();

route.post("/books", validate(createBookSchema), createBook);
route.get("/books", validate(getBookSchema), getBooks);
route.post(
  "/users/:userId/borrow",
  validate(borrowReturnBookSchema),
  borrowBook
);
route.post(
  "/users/:userId/return",
  validate(borrowReturnBookSchema),
  returnBook
);

export default route;
