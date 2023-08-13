const idValidation = require("../helpers/validation/id.validation");
const {
  getAllVideoService,
  getVideoByIdService,
} = require("../services/video.service");

const getAllVideoController = async (req, res) => {
  try {
    const videos = await getAllVideoService();
    res.status(200).json(videos);
  } catch (e) {
    res
      .status(e.errorCode || 500)
      .json(e.errorCode ? e.message : "something wrong from our side");
  }
};

const getVideoByIdController = async (req, res) => {
  try {
    const { videoId } = req.params;
    idValidation("video id", videoId);

    const video = await getVideoByIdService(videoId);
    res.status(200).json(video);
  } catch (e) {
    res
      .status(e.errorCode || 500)
      .json(e.errorCode ? e.message : "something wrong from our side");
  }
};

module.exports = { getAllVideoController, getVideoByIdController };
