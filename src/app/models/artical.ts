import mongoose from "mongoose";

export interface IArtical {
  _id: string;
  tag: string;
  title: string;
  content: string;
  author: string;
  image: string;
  date: Date;
}

const articalSchema = new mongoose.Schema({
  tag: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// export const articalModel = mongoose.model("articals", articalSchema);
export const articalModel =
  mongoose.models.articals || mongoose.model("articals", articalSchema);
