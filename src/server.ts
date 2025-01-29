import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// prisma client
import prisma from "./config/prisma.js";
// routes
import authRouter from "./routes/authRoutes.js";
// error handlers
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorMiddlewares.js";
// constants
import { PORT, NODE_ENV, APP_ORIGIN } from "./constants/env.js";

const app = express();

app.use(express.json());
// cors
app.use(
  cors({
    origin: APP_ORIGIN,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(cookieParser());
// routing
app.use("/api/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`server running on port ${PORT} in ${NODE_ENV} environment`)
    );
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit();
  }
};

startServer();
