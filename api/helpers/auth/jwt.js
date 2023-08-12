const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UnauthorizedError = require("../errors/unauthorized");

dotenv.config();

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (e) {
    throw new UnauthorizedError("unauthenticated");
  }
};

module.exports = { generateAccessToken, verifyToken };
