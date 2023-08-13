const idValidation = require("../helpers/validation/id.validation");
const { getProductByVideoIdService } = require("../services/product.service");

const getProductByVideoIdController = async (req, res) => {
  try {
    const { videoId } = req.params;
    idValidation("video id", videoId);

    const products = await getProductByVideoIdService(videoId);
    res.status(200).json(products);
  } catch (e) {
    res
      .status(e.errorCode || 500)
      .json(e.errorCode ? e.message : "something wrong from our side");
  }
};

module.exports = { getProductByVideoIdController };
