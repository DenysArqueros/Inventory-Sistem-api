import { Router } from "express";
import { getProducto, createProducto, updateProducto, deleteProducto } from "@Controllers/product.controller";

const router = Router();

router.get('/producto', getProducto);
router.post('/producto', createProducto);
router.put('/producto', updateProducto);
router.delete('/producto/:id', deleteProducto);

export default router;
