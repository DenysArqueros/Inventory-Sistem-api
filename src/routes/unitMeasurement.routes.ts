import { Router } from "express";
import { getUnitMeasurement, createUnitMeasurement, updateUnitMeasurement, deleteUnitMeasurement } from "@Controllers/unitMeasurement.controller";

const router = Router();

router.get('/unitMeasurement', getUnitMeasurement);
router.post('/unitMeasurement', createUnitMeasurement);
router.put('/unitMeasurement', updateUnitMeasurement);
router.delete('/unitMeasurement/:unit_id', deleteUnitMeasurement);


export default router;