import express from "express";
import { login, register } from "../controller/auth_controller.js";
import validate from "../middlewares/validation.js";
import { loginSchema, registerSchema } from "../validation/index.js";

const route = express.Router();

route.post("/register", validate(registerSchema), register);
route.post("/login", validate(loginSchema), login);

export default route;
