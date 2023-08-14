const { verifyToken } = require("../helpers/auth/jwt.auth");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("bearer")) {
    try {
      const token = authHeader.split(" ")[1];
      const tokenData = verifyToken(token);
      req.token = tokenData;
      next();
    } catch (e) {
      res.status(403).json("unauthenticated");
    }
  } else {
    res.status(403).json("unauthenticated");
  }
};

module.exports = { authMiddleware };
