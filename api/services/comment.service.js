const NotFoundError = require("../helpers/errors/notFound.error");
const {
  insertComment,
  findCommentByVideoId,
} = require("../repositories/comment.repository");
const { findUserById } = require("../repositories/user.repository");
const { findVideoById } = require("../repositories/video.repository");

const postCommentService = async (videoId, userId, comment) => {
  let video = await findVideoById(videoId);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  const user = await findUserById(userId);
  if (!user) {
    throw new NotFoundError("user not found");
  }

  video = await insertComment(videoId, userId, comment);
  const newComment = video["comments"].at(-1);

  return {
    username: user.username,
    profile_color: user.profileColor,
    comment: newComment.comment,
    timestamp: newComment.createdAt,
  };
};

const getCommentByVideoIdService = async (videoId) => {
  const video = await findVideoById(videoId);
  if (!video) {
    throw new NotFoundError("video not found");
  }

  const comments = await findCommentByVideoId(videoId);

  return comments.comments.map((comment) => {
    return {
      username: comment.user.username,
      profile_color: comment.user.profileColor,
      comment: comment.comment,
      timestamp: comment.createdAt,
    };
  });
};

module.exports = { postCommentService, getCommentByVideoIdService };
