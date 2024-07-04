import { Router } from "express";
import { getUnidadMedida, createUnidadMedida, updateUnidadMedida, deleteUnidadMedida } from "@Controllers/unitMeasurement.controller";

const router = Router();

router.get('/unidadMedida', getUnidadMedida);
router.post('/unidadMedida', createUnidadMedida);
router.put('/unidadMedida', updateUnidadMedida);
router.delete('/unidadMedida/:id', deleteUnidadMedida);


export default router;