"use strict";

var _customError = require("../../errors/custom-error");

var errorHandlerMiddleware = function errorHandlerMiddleware(err, req, res, next) {
  if (err instanceof _customError.customErrorHandler) {
    return res.status(err.statusCode).json({
      msg: err.message
    });
  }

  return res.status(500).json({
    msg: 'something went wrong please try again'
  });
};

module.exports = errorHandlerMiddleware;