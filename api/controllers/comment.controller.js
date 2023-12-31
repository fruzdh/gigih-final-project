const idValidation = require("../helpers/validation/id.validation");
const { textValidation } = require("../helpers/validation/text.validation");
const {
  postCommentService,
  getCommentByVideoIdService,
} = require("../services/comment.service");

const postCommentController = async (req, res) => {
  try {
    const { videoId } = req.params;
    idValidation("video id", videoId);

    const { id } = req.token;
    idValidation("user id", id);

    const { comment } = req.body;
    textValidation({ comment: comment });

    const newComment = await postCommentService(videoId, id, comment);
    res.status(200).json(newComment);
  } catch (e) {
    res
      .status(e.errorCode || 500)
      .json(e.errorCode ? e.message : "something wrong from our side");
  }
};

const getCommentByVideoIdController = async (req, res) => {
  try {
    const { videoId } = req.params;
    idValidation("video id", videoId);
    const comments = await getCommentByVideoIdService(videoId);
    res.status(200).json(comments);
  } catch (e) {
    res
      .status(e.errorCode || 500)
      .json(e.errorCode ? e.message : "something wrong from our side");
  }
};

module.exports = { postCommentController, getCommentByVideoIdController };
