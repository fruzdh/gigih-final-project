const Video = require("../models/video.model");

const insertComment = async (videoId, userId, comment) => {
  const newComment = {
    user: userId,
    comment: comment,
  };

  return Video.findByIdAndUpdate(
    videoId,
    { $push: { comments: newComment } },
    { new: true }
  );
};

const findCommentByVideoId = async (videoId) => {
  return Video.findById(videoId, "comments").populate({
    path: "comments",
    populate: {
      path: "user",
      select: ["username", "profileColor"],
    },
  });
};

module.exports = { insertComment, findCommentByVideoId };
