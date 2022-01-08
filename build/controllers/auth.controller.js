"use strict";

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, user, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;

            if (!(!username || !email || !password)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              msg: "Incomplete data model"
            }));

          case 3:
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 8;
            return _User["default"].ancryptPassword(password);

          case 8:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 18;
              break;
            }

            _context.next = 14;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 14:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (e) {
              return e._id;
            });
            _context.next = 22;
            break;

          case 18:
            _context.next = 20;
            return _Role["default"].findOne({
              name: "user"
            });

          case 20:
            role = _context.sent;
            newUser.roles = [role._id];

          case 22:
            _context.next = 24;
            return _User["default"].create(newUser);

          case 24:
            user = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: newUser._id
            }, process.env.SECRETtJWT, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signIn = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, email, password, userfound, passwordMatch, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 3;
            return _User["default"].findOne({
              email: email
            }).populate("roles");

          case 3:
            userfound = _context2.sent;

            if (userfound) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", next((0, _middleware.customErrorHandler)('User not found', 401)));

          case 6:
            _context2.next = 8;
            return _User["default"].comparePassword(password, userfound.password);

          case 8:
            passwordMatch = _context2.sent;

            if (passwordMatch) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", next((0, _middleware.customErrorHandler)("Invalid password", 401)));

          case 11:
            token = _jsonwebtoken["default"].sign({
              id: userfound._id
            }, process.env.SECRETtJWT, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = {
  signIn: signIn,
  signUp: signUp
};