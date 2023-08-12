class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.errorCode = 400;
    this.name = "BadRequestError";
  }
}

module.exports = BadRequestError;
