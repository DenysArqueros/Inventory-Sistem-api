import { Router } from "express";
import { createVenta, getVentaById, getVentaByDate } from "@Controllers/venta.controller";

const router = Router();

router.post('/venta', createVenta);
router.post('/ventaByDate', getVentaByDate);
router.get('/venta/:idVenta', getVentaById);


export default router;