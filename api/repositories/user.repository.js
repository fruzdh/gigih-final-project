const User = require("../models/user.model");

const insertUser = async (username, password, profileColor) => {
  const newUser = new User({
    username: username,
    password: password,
    profileColor: profileColor,
  });

  return await newUser.save();
};

const findUserById = async (id) => {
  return await User.findById(id).exec();
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username: username }).exec();
};

module.exports = { insertUser, findUserById, findUserByUsername };
