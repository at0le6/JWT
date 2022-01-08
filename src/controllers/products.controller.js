import Product from "../models/Product";
import { asyncWrapper, customErrorHandler } from "../middleware";

const getProducts = asyncWrapper(async(req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products });
})

const createProducts = asyncWrapper(async(req, res) => {
    const { name, category, price, imgURL } = req.body
    const product = await Product.create({ name, category, price, imgURL })
    res.status(201).json({ product });
})

const getProductById = asyncWrapper(async(req, res, next) => {
    const { prodectId: ID } = req.params;
    const product = await Product.findById(ID)
    if (!product) {
        return next(customErrorHandler(`Id ${ID} not found`, 404));
    }
    res.status(200).json({ product })
})

const updateProductById = asyncWrapper(async(req, res, next) => {
    const { prodectId: ID } = req.params;
    const product = await Product.findByIdAndUpdate(ID, req.body, {
        new: true,
        runValidators: true
    });
    if (!product) {
        return next(customErrorHandler(`Id ${ID} not found`, 404))
    }
    res.status(200).json({ product });
})

const deleteProductById = asyncWrapper(async(req, res, next) => {
    const { prodectId: ID } = req.params;
    const product = await Product.findByIdAndDelete(ID)
    if (!product) {
        return next(customErrorHandler(`Id ${ID} not found`, 404))
    }
    res.status(200).json({ msg: `Item with ID${ID} deleted` });
})

module.exports = { createProducts, getProducts, getProductById, updateProductById, deleteProductById };