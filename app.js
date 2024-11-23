import express from "express";
import dotenv from "dotenv";
import globalErrorHandler from "./middlewares/global_error_handler.js";
import config from "./config/config.js";
import routes from "./route/index.js";
import connectDB from "./config/db_connect.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

//Global error hnadler
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "ChatApp is online" });
});
app.listen(config.PORT, async () => {
  await connectDB();
  console.log(`ChatApp running on port ${config.PORT}`);
});
