import express from "express";
import { connect } from "mongoose";
import "dotenv/config";
// routes
import routes from "./routes/index";
// middleware
import errorHandler from "./middleware/errorHandler";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(routes);
app.use(errorHandler);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI as string);
    console.log("database connected");
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
