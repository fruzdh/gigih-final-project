const BadRequestError = require("../errors/badRequest");

const colorValidation = (name, strColor) => {
  const regExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  if (!regExp.test(strColor)) {
    throw new BadRequestError(
      `${name} must be valid color and cannot be empty`
    );
  }
};

module.exports = { colorValidation };
