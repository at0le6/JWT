"use strict";

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, category, price, imgURL, newProduct;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            newProduct = _context2.sent;
            res.status(201).json({
              newProduct: newProduct
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getProductById = function getProductById(req, res) {
  res.json(req.params.prodectId);
};

var updateProductById = function updateProductById(req, res) {
  res.json(req.params.prodectId);
};

var deleteProductById = function deleteProductById(req, res) {
  res.json(req.params.prodectId);
};

module.exports = {
  createProducts: createProducts,
  getProducts: getProducts,
  getProductById: getProductById,
  updateProductById: updateProductById,
  deleteProductById: deleteProductById
};