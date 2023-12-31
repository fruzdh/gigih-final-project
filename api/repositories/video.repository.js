const Video = require("../models/video.model");

const findAllVideo = async () => {
  return await Video.find();
};

const findVideoById = async (id) => {
  return await Video.findById(id);
};

const findVideoByIdAndAddViewCount = async (id) => {
  return await Video.findByIdAndUpdate(
    id,
    {
      $inc: {
        viewCount: 1,
      },
    },
    { new: true }
  );
};

const findVideoByProductIds = async (productIds) => {
  return await Video.find({ products: { $in: productIds } });
};

module.exports = {
  findAllVideo,
  findVideoById,
  findVideoByIdAndAddViewCount,
  findVideoByProductIds,
};
