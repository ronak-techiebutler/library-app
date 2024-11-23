import express from "express";
import validate from "../middlewares/validation.js";
import { loginSchema, registerSchema } from "../validation/index.js";
import {
  borrowBook,
  createBook,
  getBooks,
  returnBook,
} from "../controller/book_controller.js";

const route = express.Router();

route.post("/books", createBook);
route.get("/books", getBooks);
route.post("/users/:userId/borrow", borrowBook);
route.post("/users/:userId/return", returnBook);

export default route;
