"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _errorHandler = _interopRequireDefault(require("./middleware/error-handler"));

var _initialSetUp = require("./libs/initialSetUp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //creation of baisc roles models

(0, _initialSetUp.createRoles)(); //dev stuff

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); //routes

app.use('/api/products', _products["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]); //middlewares

app.use(_errorHandler["default"]);
app.get('/', function (req, res) {
  res.json('welcome');
});
var _default = app;
exports["default"] = _default;