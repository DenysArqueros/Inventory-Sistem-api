import { pool } from "../db";
import { Request, Response } from "express";

export const createVenta = async (req: Request, res: Response) => {
  try {
    const body = JSON.stringify({
      "ventas": req.body
    });

    await pool.query("CALL sp_RealizarVenta(?);", [body]);
    res.status(200).json({
      message: "Venta Creada con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const getVentaById = async (req: Request, res: Response) => {
  const { idVenta } = req.params;
  const [tabla] = await pool.query("select * from vista_venta_detalle where idventa = ?", [idVenta]);

  res.send(tabla);
};

export const getVentaByDate = async (req: Request, res: Response) => {
  const { dateFrom, dateTo } = req.body;
  const [tabla] = await pool.query("SELECT *FROM venta WHERE venta.fecha BETWEEN ? AND ? ", [dateFrom, dateTo]);
  res.send(tabla);
};
