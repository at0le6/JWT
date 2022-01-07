"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("./../controllers/products.controller");

var router = (0, _express.Router)();
router.route('/').get(_products.getProducts).post(_products.createProducts);
router.route('/:prodectId').get(_products.getProductById).patch(_products.updateProductById)["delete"](_products.deleteProductById);
var _default = router;
exports["default"] = _default;