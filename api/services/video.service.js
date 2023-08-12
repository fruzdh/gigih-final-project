const NotFoundError = require("../helpers/errors/notFound");
const {
  findAllVideo,
  findVideoById,
} = require("../repositories/video.repository");

const getAllVideoService = async () => {
  const videos = await findAllVideo();

  return videos.map((video) => {
    return {
      videoId: video._id,
      urlImageThumbnail: `https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`,
      timestamp: video.createdAt,
    };
  });
};

const getVideoByIdService = async (id) => {
  const video = await findVideoById(id);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  return {
    urlEmbed: `https://www.youtube.com/embed/${video.youtubeVideoId}`,
    timestamp: video.createdAt,
  };
};

module.exports = { getAllVideoService, getVideoByIdService };
