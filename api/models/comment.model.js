const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Number,
      default: Math.floor(Date.now() / 1000),
    },
  },
  { _id: false }
);

module.exports = commentSchema;
