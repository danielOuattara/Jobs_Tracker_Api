const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

//----------------------
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

//----------------------
const generateBadRequestError = (errorMessage, errorStatusCode) => {
  return new BadRequestError(errorMessage, errorStatusCode);
};

//----------------------
module.exports = { generateBadRequestError, BadRequestError };
