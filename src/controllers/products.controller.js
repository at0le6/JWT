import Product from "../models/Product";

const getProducts = async(req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products });
}

const createProducts = async(req, res) => {
    const { name, category, price, imgURL } = req.body
    const product = await Product.create({ name, category, price, imgURL })
    res.status(201).json({ product });
}

const getProductById = async(req, res) => {
    const {prodectId:ID}=req.params;
    const product=await Product.findById(ID)
    if(!product)
    {
        return res.status(404).json("Id not found")
    }
    res.status(200).json({product})
}

const updateProductById = async(req, res) => {
    const {prodectId:ID}=req.params;
    const product= await Product.findByIdAndUpdate(ID,req.body,{
        new:true,
        runValidators:true
    });
    if(!product)
    {
        return res.status(404).json({msg:`Id ${ID} not found`})
    }
    res.status(200).json({product});
}

const deleteProductById = async(req, res) => {
    const {prodectId:ID}=req.params;
    const product=await Product.findByIdAndDelete(ID)
    if(!product)
    {
        return res.status(404).json({msg:`Id ${ID} not found`})
    }
    res.status(200).json({msg:`Item with ID${ID} deleted`});
}

module.exports = { createProducts, getProducts, getProductById, updateProductById, deleteProductById };