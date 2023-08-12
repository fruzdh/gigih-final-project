const express = require("express");
const {
  getAllVideoController,
  getVideoByIdController,
} = require("../controllers/video.controller");

const videoRouter = express.Router();
videoRouter.get("/video", getAllVideoController);
videoRouter.get("/video/:videoId", getVideoByIdController);

module.exports = videoRouter;
