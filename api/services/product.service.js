const NotFoundError = require("../helpers/errors/notFound");
const { findProductByVideoId } = require("../repositories/product.repository");
const { findVideoById } = require("../repositories/video.repository");

const getProductByVideoIdService = async (videoId) => {
  const video = await findVideoById(videoId);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  const products = await findProductByVideoId(videoId);

  return products.products.map((product) => {
    return {
      productId: product._id,
      linkProduct: product.url,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    };
  });
};

module.exports = { getProductByVideoIdService };
