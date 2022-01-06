const createProducts = (req, res) => {
    res.json('createProcuct');
}
const getProducts = (req, res) => {
    res.json('getProcuct');
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