import Product from "../models/Product";

const getProducts = async(req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products });
}

const createProducts = async(req, res) => {
    const { name, category, price, imgURL } = req.body
    const newProduct = await Product.create({ name, category, price, imgURL })
    res.status(201).json({ newProduct });
}

const getProductById = (req, res) => {
    res.json(req.params.prodectId);
}

const updateProductById = (req, res) => {
    res.json(req.params.prodectId);
}

const deleteProductById = (req, res) => {
    res.json(req.params.prodectId);
}

module.exports = { createProducts, getProducts, getProductById, updateProductById, deleteProductById };