import { pool } from "../db";
import { Request, Response } from "express";

export const getCategoria = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("Select * from categoria");
  res.send(tabla);
};

export const createCategoria = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into categoria values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateCategoria = async (req: Request, res: Response) => {
  try {
    const { nombre, id } = req.body;
    const [result]: any = await pool.query(
      "update categoria set nombre = ? where id = ?",
      [nombre, id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
        message: "Categoria no encontrada",
      })
      : res.status(200).json({
        message: "Categoria actualizada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query("delete from categoria where id = ?", [
      id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
        message: "Categoria no encontrada",
      })
      : res.status(200).json({
        message: "Categoria eliminada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};