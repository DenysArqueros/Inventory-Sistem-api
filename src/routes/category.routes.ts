import { Router } from "express";
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from "@Controllers/category.controller";

const router = Router();

router.get('/categoria', getCategoria);
router.post('/categoria', createCategoria);
router.put('/categoria', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

export default router;
