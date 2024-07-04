import mongoose from "mongoose";
import type UserType from "../types/userType";
import { compare, genSalt, hash } from "bcrypt";

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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await genSalt(12);
  this.password = await hash(this.password, salt);
});

userSchema.methods.comparePasswords = async function (enteredPassword: string) {
  return await compare(enteredPassword, this.password);
};

const User = mongoose.model<UserType>("User", userSchema);
export default User;
