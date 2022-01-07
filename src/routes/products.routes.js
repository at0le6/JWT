import { Router } from "express";
import { createProducts, getProducts, getProductById, updateProductById, deleteProductById } from './../controllers/products.controller'
const router = Router();

router.route('/').get(getProducts).post(createProducts)

router.route('/:prodectId').get( getProductById).patch(updateProductById).delete(deleteProductById);

export default router;