const NotFoundError = require("../helpers/errors/notFound");
const {
  findAllVideo,
  findVideoById,
} = require("../repositories/video.repository");

const getAllVideoService = async () => {
  const videos = await findAllVideo();

  return videos.map((video) => {
    return {
      video_id: video._id,
      url_image_thumbnail: `https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`,
      timestamp: video.createdAt,
      view_count: video.viewCount,
    };
  });
};

const getVideoByIdService = async (id) => {
  const video = await findVideoById(id);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  return {
    url_embed: `https://www.youtube.com/embed/${video.youtubeVideoId}`,
    timestamp: video.createdAt,
    view_count: video.viewCount,
  };
};

module.exports = { getAllVideoService, getVideoByIdService };
