import express from "express";
// config
import prismaClient from "./config/prisma.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

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
