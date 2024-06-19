import mongoose from "mongoose";
import type CommentType from "../types/comment";

const commentScheme = new mongoose.Schema<CommentType>(
  {},
  { timestamps: true }
);

export default mongoose.model<CommentType>("Comment", commentScheme);
