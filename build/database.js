"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var connectDB = function connectDB(uri) {
  return _mongoose["default"].connect(uri).then(function (db) {
    return console.log("Db connected");
  })["catch"](function (error) {
    return console.log(error);
  });
};

module.exports = connectDB;