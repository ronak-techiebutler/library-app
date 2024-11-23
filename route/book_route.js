import express from "express";
import validate from "../middlewares/validation.js";
import { createBookSchema, getBookSchema } from "../validation/index.js";
import {
  borrowBook,
  createBook,
  getBooks,
  returnBook,
} from "../controller/book_controller.js";

const route = express.Router();

route.post("/books", validate(createBookSchema), createBook);
route.get("/books", validate(getBookSchema), getBooks);
route.post("/users/:userId/borrow", borrowBook);
route.post("/users/:userId/return", returnBook);

export default route;
