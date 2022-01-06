import { Router } from "express";
import { createProducts, getProducts, getProductById, updateProductById, deleteProductById } from './../controllers/products.controller'
const router = Router();

router.get('/', getProducts).post('/', createProducts)

router.get('/:prodectId', getProductById).patch('/:prodectId', updateProductById).delete('/:prodectId', deleteProductById);

export default router;