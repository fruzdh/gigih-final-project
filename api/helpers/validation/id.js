const mongoose = require("mongoose");
const BadRequestError = require("../errors/badRequest");

const idValidation = (name, id) => {
  if (!mongoose.isObjectIdOrHexString(id)) {
    throw new BadRequestError(`invalid ${name}`);
  }
};

module.exports = idValidation;
