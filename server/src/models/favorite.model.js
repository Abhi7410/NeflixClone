import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // user id
    ref: "User", // it is linked to User model
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
  mediaRate: {
    type: Number,
    required: true
  },
}, modelOptions);

export default mongoose.model("Favorite", favoriteSchema);