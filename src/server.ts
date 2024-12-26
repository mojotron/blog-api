import express from "express";
import cors from "cors";
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
// cors
app.use(
  cors({
    origin: ["http://localhost:5000"],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
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
