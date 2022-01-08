"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var _middleware = require("../middleware");

var getProducts = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Product["default"].find({});

          case 2:
            products = _context.sent;
            res.status(200).json({
              products: products
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var createProducts = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, category, price, imgURL, product;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, imgURL = _req$body.imgURL;
            _context2.next = 3;
            return _Product["default"].create({
              name: name,
              category: category,
              price: price,
              imgURL: imgURL
            });

          case 3:
            product = _context2.sent;
            res.status(201).json({
              product: product
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var getProductById = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var ID, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ID = req.params.prodectId;
            _context3.next = 3;
            return _Product["default"].findById(ID);

          case 3:
            product = _context3.sent;

            if (product) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", next((0, _middleware.customErrorHandler)("Id ".concat(ID, " not found"), 404)));

          case 6:
            res.status(200).json({
              product: product
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
var updateProductById = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var ID, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            ID = req.params.prodectId;
            _context4.next = 3;
            return _Product["default"].findByIdAndUpdate(ID, req.body, {
              "new": true,
              runValidators: true
            });

          case 3:
            product = _context4.sent;

            if (product) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", next((0, _middleware.customErrorHandler)("Id ".concat(ID, " not found"), 404)));

          case 6:
            res.status(200).json({
              product: product
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
var deleteProductById = (0, _middleware.asyncWrapper)( /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var ID, product;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ID = req.params.prodectId;
            _context5.next = 3;
            return _Product["default"].findByIdAndDelete(ID);

          case 3:
            product = _context5.sent;

            if (product) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", next((0, _middleware.customErrorHandler)("Id ".concat(ID, " not found"), 404)));

          case 6:
            res.status(200).json({
              msg: "Item with ID".concat(ID, " deleted")
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = {
  createProducts: createProducts,
  getProducts: getProducts,
  getProductById: getProductById,
  updateProductById: updateProductById,
  deleteProductById: deleteProductById
};