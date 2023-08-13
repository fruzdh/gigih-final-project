const NotFoundError = require("../helpers/errors/notFound.error");
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
      product_id: product._id,
      link_product: product.url,
      title: product.title,
      price: product.price,
      image_url: product.imageUrl,
    };
  });
};

module.exports = { getProductByVideoIdService };
