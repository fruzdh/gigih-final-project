const Product = require("../models/product.model");
const Video = require("../models/video.model");
const { products1, products2 } = require("./data/product");
const { videos1, videos2 } = require("./data/video");

const migrate = async () => {
  await deleteAll();

  let products = await insertProduct(products1);
  await insertVideo(videos1, products);

  products = await insertProduct(products2);
  await insertVideo(videos2, products);
};

const deleteAll = async () => {
  await Product.deleteMany({});
  await Video.deleteMany({});
};

const insertProduct = async (products) => {
  return await Product.insertMany(products);
};

const insertVideo = async (videos, products) => {
  const newVideos = videos.map((video, i) => {
    const videoProducts = products
      .slice(5 * i, 5 * (i + 1))
      .map((product) => product._id);
    video.products = videoProducts;

    return video;
  });

  const date = new Date("2023-07-01");

  for (let i = 0; i < newVideos.length; i++) {
    await Video.insertMany([{ ...newVideos[i], createdAt: date }]);
    date.setDate(date.getDate() + 1);
  }
};

module.exports = migrate;
