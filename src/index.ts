import express from "express";
// config
import prismaClient from "./config/prisma.js";
// error handlers
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorMiddlewares.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

// routing
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    app.listen(port, () => console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
    await prismaClient.$disconnect();
    process.exit();
  }
};

startServer();
