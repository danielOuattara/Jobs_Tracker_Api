const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

//----------------------
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

//----------------------
const generateUnauthenticatedError = (errorMessage, errorStatusCode) => {
  return new UnauthenticatedError(errorMessage, errorStatusCode);
};

//----------------------
module.exports = { generateUnauthenticatedError, UnauthenticatedError };
