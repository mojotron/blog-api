import express from "express";
// prisma client
import prismaClient from "./config/prisma.js";
// routes
import routes from "./routes/index.js";
// error handlers
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorMiddlewares.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

// routing
app.use(routes);
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
