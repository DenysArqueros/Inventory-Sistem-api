import { pool } from "../db";
import { Request, Response } from "express";

export const getMarca = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("Select * from marca");
  res.send(tabla);
};

export const createMarca = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into marca values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateMarca = async (req: Request, res: Response) => {
  try {
    const { nombre, id } = req.body;
    const [result]: any = await pool.query(
      "update marca set nombre = ? where id = ?",
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

export const deleteMarca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query("delete from marca where id = ?", [
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
