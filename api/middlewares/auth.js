const { verifyToken } = require("../helpers/auth/jwt");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("bearer")) {
    try {
      const token = authHeader.split(" ")[1];
      const tokenData = verifyToken(token);
      req.token = tokenData;
      next();
    } catch (e) {
      res.status(403).json({
        status: "fail",
        message: "unauthenticated",
      });
    }
  } else {
    res.status(403).json({
      status: "fail",
      message: "unauthenticated",
    });
  }
};

module.exports = { authMiddleware };
