import { Router } from "express";
import { getCategory, createCategory , updateCategory , deleteCategory } from "@Controllers/category.controller";

const router = Router();

router.get('/category', getCategory);
router.post('/category', createCategory);
router.put('/category', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;
