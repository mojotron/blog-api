import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

export default connectDB;
