const { hash, compare } = require("../helpers/auth/hash.auth");
const { generateAccessToken } = require("../helpers/auth/jwt.auth");
const ConflictError = require("../helpers/errors/conflict.error");
const NotFoundError = require("../helpers/errors/notFound.error");
const UnauthorizedError = require("../helpers/errors/unauthorized.error");
const {
  insertUser,
  findUserByUsername,
} = require("../repositories/user.repository");

const registerService = async (username, password, profileColor) => {
  const user = await findUserByUsername(username);
  if (user) {
    throw new ConflictError("username is already in use");
  }

  const hashedPassword = await hash(password);
  const newUser = await insertUser(username, hashedPassword, profileColor);

  return {
    username: newUser.username,
    profile_color: newUser.profileColor,
    access_token: generateAccessToken(newUser),
  };
};

const loginService = async (username, password) => {
  const user = await findUserByUsername(username);
  if (!user) {
    throw new NotFoundError("user not found");
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    throw new UnauthorizedError("wrong password");
  }

  return {
    username: user.username,
    profile_color: user.profileColor,
    access_token: generateAccessToken(user),
  };
};

module.exports = { registerService, loginService };
