import { Router } from "express";
import { createSale, getSaleById, getSaleByDate } from "@Controllers/sale.controller";

const router = Router();

router.get('/sale/:sale_id', getSaleById);
router.post('/sale', createSale);
router.post('/saleByDate', getSaleByDate);

export default router;
