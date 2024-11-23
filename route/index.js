import express from "express";
import authRoute from "./auth_route.js";
import bookRoute from "./book_route.js";

const route = express.Router();

route.use(authRoute);
route.use(bookRoute);

export default route;
