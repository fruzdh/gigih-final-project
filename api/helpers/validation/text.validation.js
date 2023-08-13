const BadRequestError = require("../errors/badRequest.error");

const textValidation = (text) => {
  for (const key in text) {
    if (typeof text[key] !== "string" || text[key].length === 0) {
      throw new BadRequestError(`${key} must be string and cannot be empty`);
    }
  }
};

module.exports = { textValidation };
