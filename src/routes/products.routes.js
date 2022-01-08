import { Router } from "express";
import { createProducts, getProducts, getProductById, updateProductById, deleteProductById } from './../controllers/products.controller'
import { authoritations } from "../middleware";
const router = Router();

router.route('/').get(getProducts).post([authoritations.verifyToken, authoritations.isModerator], createProducts)

router.route('/:prodectId').get(getProductById)
    .patch([authoritations.verifyToken, authoritations.isAdmin], updateProductById)
    .delete([authoritations.verifyToken, authoritations.isAdmin], deleteProductById);

export default router;