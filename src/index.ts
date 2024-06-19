import express from "express";
import "dotenv/config";
// routes
import routes from "./routes/index";
// middleware
import errorHandler from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(routes);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
  } catch (error) {}
};

start();
