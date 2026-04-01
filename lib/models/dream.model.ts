import mongoose from "mongoose";

const DreamSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },

    username: {
      type: String,
      required: true,
    },

    userImage: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    type: {
      type: String,
      enum: ["dream", "nightmare"],
      required: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },

    images: {
      type: [String],
      default: [],
    },

    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Dream =
  mongoose.models.Dream || mongoose.model("Dream", DreamSchema);

export default Dream;
