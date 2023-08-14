const NotFoundError = require("../helpers/errors/notFound.error");
const { findProductByTitle } = require("../repositories/product.repository");
const {
  findAllVideo,
  findVideoByIdAndAddViewCount,
  findVideoByProductIds,
} = require("../repositories/video.repository");

const getAllVideoService = async () => {
  const videos = await findAllVideo();

  return videos.map((video) => {
    return {
      video_id: video._id,
      url_image_thumbnail: `https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`,
      timestamp: new Date(video.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      view_count: video.viewCount,
    };
  });
};

const getVideoByIdService = async (id) => {
  const video = await findVideoByIdAndAddViewCount(id);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  return {
    url_embed: `https://www.youtube.com/embed/${video.youtubeVideoId}`,
    timestamp: new Date(video.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    view_count: video.viewCount,
  };
};

const getVideoByProductTitleService = async (title) => {
  const productIds = await findProductByTitle(title);
  if (productIds.length === 0) {
    return [];
  }

  const videos = await findVideoByProductIds(productIds);

  return videos.map((video) => {
    return {
      video_id: video._id,
      url_image_thumbnail: `https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`,
      timestamp: new Date(video.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      view_count: video.viewCount,
    };
  });
};

module.exports = {
  getAllVideoService,
  getVideoByIdService,
  getVideoByProductTitleService,
};
