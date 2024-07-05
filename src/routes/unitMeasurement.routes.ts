import { Router } from "express";
import { getUnitMeasurement, createUnitMeasurement, updateUnitMeasurement, deleteUnitMeasurement } from "@Controllers/unitMeasurement.controller";

const router = Router();

router.get('/unidadMedida', getUnitMeasurement);
router.post('/unidadMedida', createUnitMeasurement);
router.put('/unidadMedida', updateUnitMeasurement);
router.delete('/unidadMedida/:id', deleteUnitMeasurement);


export default router;