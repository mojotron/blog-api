import mongoose from "mongoose";
import type UserType from "../types/user";
import { compare, genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

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
  try {
    const salt = await genSalt(12);
    const hashedPassword = await hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    throw error;
  }
});

userSchema.methods.generateToken = function () {
  const token = sign({ userId: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFESPAN,
  });

  return token;
};

userSchema.methods.comparePasswords = async function (enteredPassword: string) {
  try {
    const isMatch = await compare(enteredPassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model<UserType>("User", userSchema);
export default User;
