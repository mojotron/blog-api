import mongoose from "mongoose";
import type CommentType from "../types/comment";

const commentScheme = new mongoose.Schema<CommentType>(
  {},
  { timestamps: true }
);

const Comment = mongoose.model<CommentType>("Comment", commentScheme);

export default Comment;
