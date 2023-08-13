class ConflictError extends Error {
  constructor(message) {
    super(message);

    this.errorCode = 409;
    this.name = "ConflictError";
  }
}

module.exports = ConflictError;
