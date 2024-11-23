import express from "express";
import validate from "../middlewares/validation.js";
import { loginSchema, registerSchema } from "../validation/index.js";
import { createBook } from "../controller/book_controller.js";

const route = express.Router();

route.post("/books", createBook);
// route.get("/books", validate(loginSchema), login);

export default route;
