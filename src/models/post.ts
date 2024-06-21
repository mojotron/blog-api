import mongoose from "mongoose";
import type PostType from "../types/post";
import { POST_LENGTHS, POST_DEFAULTS } from "../constants/post";

const postScheme = new mongoose.Schema<PostType>(
  {
    authorId: { type: mongoose.Types.ObjectId },
    title: {
      type: String,
      required: true,
      minlength: POST_LENGTHS.title.max,
      maxlength: POST_LENGTHS.title.max,
    },
    content: {
      type: String,
      required: true,
      minlength: POST_LENGTHS.content.min,
      maxlength: POST_LENGTHS.content.min,
    },
    description: {
      type: String,
      required: true,
      minlength: POST_LENGTHS.description.min,
      maxlength: POST_LENGTHS.description.max,
    },
    readingTime: { type: Number, required: true },
    readCount: { type: Number, default: POST_DEFAULTS.readCount },
    likes: { type: Number, default: POST_DEFAULTS.likes },
  },
  { timestamps: true }
);

export default mongoose.model<PostType>("Post", postScheme);
