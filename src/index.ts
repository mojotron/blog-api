import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log("server listening at port ${PORT}"));
  } catch (error) {}
};

start();
