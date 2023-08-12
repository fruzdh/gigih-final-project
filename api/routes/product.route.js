const express = require("express");
const {
  getProductByVideoIdController,
} = require("../controllers/product.controller");

const productRouter = express.Router();
productRouter.get("/video/:videoId/product", getProductByVideoIdController);

module.exports = productRouter;
