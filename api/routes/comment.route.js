const express = require("express");
const {
  postCommentController,
  getCommentByVideoIdController,
} = require("../controllers/comment.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const commentRouter = express.Router();
commentRouter.post(
  "/video/:videoId/comment",
  authMiddleware,
  postCommentController
);
commentRouter.get("/video/:videoId/comment", getCommentByVideoIdController);

module.exports = commentRouter;
