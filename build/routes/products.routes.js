"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("./../controllers/products.controller");

var router = (0, _express.Router)();
router.get('/', _products.getProducts);
router.post('/', _products.createProducts);
router.get('/:prodectId', _products.getProductById);
router.patch('/:prodectId', _products.updateProductById);
router["delete"]('/:prodectId', _products.deleteProductById);
var _default = router;
exports["default"] = _default;