import mongoose, { Document } from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//If its present || make new one
const Url = mongoose.models.Url || mongoose.model("Url", urlSchema);

export default Url;
