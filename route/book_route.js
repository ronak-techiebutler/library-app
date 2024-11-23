import express from "express";
import validate from "../middlewares/validation.js";
import { loginSchema, registerSchema } from "../validation/index.js";
import { createBook, getBooks } from "../controller/book_controller.js";

const route = express.Router();

route.post("/books", createBook);
route.get("/books", getBooks);

export default route;
