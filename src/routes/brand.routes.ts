import { Router } from "express";
import { getMarca, createMarca, updateMarca, deleteMarca } from "@Controllers/brand.controller";

const router = Router();

router.get('/marca', getMarca);
router.post('/marca', createMarca);
router.put('/marca', updateMarca);
router.delete('/marca/:id', deleteMarca);

export default router;