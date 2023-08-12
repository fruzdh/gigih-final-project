const userRouter = require("./user.route");
const videoRouter = require("./video.route");
const commentRouter = require("./comment.route");
const productRouter = require("./product.route");

const router = [userRouter, videoRouter, commentRouter, productRouter];

module.exports = router;
