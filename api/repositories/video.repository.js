const Video = require("../models/video.model");

const findAllVideo = async () => {
  return await Video.find({}, "_id youtubeVideoId createdAt");
};

const findVideoById = async (id) => {
  return await Video.findById(id, "youtubeVideoId createdAt");
};

module.exports = { findAllVideo, findVideoById };
