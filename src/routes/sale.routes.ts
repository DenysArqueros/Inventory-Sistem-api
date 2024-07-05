import { Router } from "express";
import { createSale, getSaleById, getSaleByDate } from "@Controllers/sale.controller";

const router = Router();

router.post('/venta', createSale);
router.post('/ventaByDate', getSaleById);
router.get('/venta/:idVenta', getSaleByDate);


export default router;