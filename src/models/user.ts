import mongoose from "mongoose";
import type UserType from "../types/user";

const userSchema = new mongoose.Schema<UserType>(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      unique: true,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserType>("User", userSchema);
