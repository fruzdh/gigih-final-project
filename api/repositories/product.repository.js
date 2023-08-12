const Video = require("../models/video.model");

const findProductByVideoId = async (videoId) => {
  return Video.findById(videoId, "products").populate("products");
};

module.exports = { findProductByVideoId };
