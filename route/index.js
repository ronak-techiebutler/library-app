import express from "express";
import authRoute from "./auth_route.js";

const route = express.Router();

route.use(authRoute);

export default route;
