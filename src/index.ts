import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
// db
import connectDB from "./db/connect";
// routes
import routes from "./routes/index";
// middleware
import { notFound, errorHandler } from "./middleware/errorMiddlewares";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:8000`,
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// routes
app.use(routes);
// error middlewares
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
