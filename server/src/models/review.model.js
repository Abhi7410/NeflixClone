import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // user id
    ref: "User", // it is linked to User model
    required: true
  },
  content: {
    type: String,
    required: true
  },
  mediaType: {
    type: String,
    enum: ["tv", "movie"],
    required: true
  },
  mediaId: {
    type: String,
    required: true
  },
  mediaTitle: {
    type: String,
    required: true
  },
  mediaPoster: {
    type: String,
    required: true
  },
}, modelOptions);

export default mongoose.model("Review", reviewSchema);