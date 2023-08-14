const Video = require("../models/video.model");
const Product = require("../models/product.model");

const findProductByVideoId = async (videoId) => {
  return Video.findById(videoId, "products").populate("products");
};

const findProductByTitle = async (title) => {
  return Product.find(
    { title: { $regex: ".*" + title + ".*", $options: "i" } },
    "_id"
  ).exec();
};

module.exports = { findProductByVideoId, findProductByTitle };
