"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDB = function connectDB(uri) {
  return _mongoose["default"].connect(uri).then(function (db) {
    return console.log("Db connected");
  })["catch"](function (error) {
    return console.log(error);
  });
};

module.exports = connectDB;