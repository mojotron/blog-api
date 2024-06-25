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

const User = mongoose.model<UserType>("User", userSchema);
export default User;
