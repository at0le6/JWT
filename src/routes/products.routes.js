import { Router } from "express";
import { createProducts, getProducts, getProductById, updateProductById, deleteProductById } from './../controllers/products.controller'
const router = Router();

router.get('/', getProducts)

router.post('/', createProducts)

router.get('/:prodectId', getProductById)

router.patch('/:prodectId', updateProductById)

router.delete('/:prodectId', deleteProductById);

export default router;