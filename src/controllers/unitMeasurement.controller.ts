import { pool } from "../db";
import { Request, Response } from "express";

export const getUnidadMedida = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("Select * from unidadMedida");
  res.send(tabla);
};

export const createUnidadMedida = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;

    await pool.query("insert into unidadMedida values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateUnidadMedida = async (req: Request, res: Response) => {
  try {
    const { nombre, id } = req.body;
    const [result]: any = await pool.query(
      "update unidadMedida set nombre = ? where id = ?",
      [nombre, id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
        message: "Marca no encontrada",
      })
      : res.status(200).json({
        message: "Marca actualizada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteUnidadMedida = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query("delete from unidadMedida where id = ?", [
      id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
        message: "Marca no encontrada",
      })
      : res.status(200).json({
        message: "Marca eliminada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};
