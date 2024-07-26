import { pool } from "../db";
import { Request, Response } from "express";

export const getUnitMeasurement = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("select * from unitmeasurement");
  res.send(tabla);
};

export const createUnitMeasurement = async (req: Request, res: Response) => {
  try {
    const { descripcion } = req.body;
    await pool.query("insert into unitmeasurement values(null,?)", [descripcion]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateUnitMeasurement = async (req: Request, res: Response) => {
  try {
    const { descripcion, unit_id } = req.body;
    const [result]: any = await pool.query( "update unitmeasurement set descripcion = ? where unit_id = ?", [descripcion, unit_id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
        message: "Unidad de Medida no encontrada",
      })
      : res.status(200).json({
        message: "Unidad de Medida actualizada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteUnitMeasurement = async (req: Request, res: Response) => {
  try {
    const { unit_id } = req.params;
    const [result]: any = await pool.query("delete from unitmeasurement where unit_id = ?", [unit_id]);
    return result.affectedRows <= 0
      ? res.status(404).json({
        message: "Unidad de Medida  no encontrada",
      })
      : res.status(200).json({
        message: "Unidad de Medida eliminada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};
