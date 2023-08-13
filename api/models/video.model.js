const mongoose = require("mongoose");
const commentSchema = require("./comment.model");

const videoSchema = new mongoose.Schema({
  youtubeVideoId: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Video", videoSchema);
