import mongoose from "mongoose";
import type PostType from "../types/post";

const postScheme = new mongoose.Schema<PostType>({}, { timestamps: true });

export default mongoose.model<PostType>("Post", postScheme);
