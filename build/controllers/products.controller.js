"use strict";

var createProducts = function createProducts(req, res) {
  res.json('createProcuct');
};

var getProducts = function getProducts(req, res) {
  res.json('getProcuct');
};

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