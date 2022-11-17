const CustomAPIError = require("./custom-api");
const { StatusCodes } = require("http-status-codes");

//----------------------
class ServerError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

//----------------------
const generateServerError = (errorMessage, errorStatusCode) => {
  return new ServerError(errorMessage, errorStatusCode);
};

//----------------------
module.exports = { generateServerError, ServerError };
