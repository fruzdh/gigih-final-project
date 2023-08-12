const { hash, compare } = require("../helpers/auth/hash");
const { generateAccessToken } = require("../helpers/auth/jwt");
const ConflictError = require("../helpers/errors/conflict");
const NotFoundError = require("../helpers/errors/notFound");
const UnauthorizedError = require("../helpers/errors/unauthorized");
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
    profileColor: newUser.profileColor,
    token: generateAccessToken(newUser),
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
    profileColor: user.profileColor,
    token: generateAccessToken(user),
  };
};

module.exports = { registerService, loginService };
