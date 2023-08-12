class UnauthorizedError extends Error {
  constructor(message) {
    super(message);

    this.errorCode = 401;
    this.name = "UnauthorizedError";
  }
}

module.exports = UnauthorizedError;
