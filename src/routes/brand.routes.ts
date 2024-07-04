import { Router } from "express";
import { getBrand, createBrand, updateBrand, deleteBrand } from "@Controllers/brand.controller";

const router = Router();

router.get('/brand', getBrand);
router.post('/brand', createBrand);
router.put('/brand', updateBrand);
router.delete('/brand/:id', deleteBrand);

export default router;