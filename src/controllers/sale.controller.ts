import { pool } from "../db";
import { Request, Response } from "express";

export const createSale = async (req: Request, res: Response) => {
  try {
    const body = JSON.stringify({
      "sales": req.body
    });
    await pool.query("CALL sp_make_sale(?);", [body]);
    res.status(200).json({
      message: "Venta Creada con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const getSaleById = async (req: Request, res: Response) => {
  const { sale_id } = req.params;
  const [tabla] = await pool.query("select * from view_sale_datail where sale_id = ?", [sale_id]);

  res.send(tabla);
};

export const getSaleByDate = async (req: Request, res: Response) => {
  const { dateFrom, dateTo } = req.body;
  const [tabla] = await pool.query("SELECT * FROM sale WHERE sale.issue_date BETWEEN ? AND ? ", [dateFrom, dateTo]);
  res.send(tabla);
};
