const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

//----------------------
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

//----------------------
const generateNotFoundError = (errorMessage, errorStatusCode) => {
  return new NotFoundError(errorMessage, errorStatusCode);
};

//----------------------
module.exports = { generateNotFoundError, NotFoundError };
