import { pool } from "../db";
import { Request, Response } from "express";

export const getCategory = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("select * from category");
  res.send(tabla);
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into category values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { nombre, id } = req.body;
    const [result]: any = await pool.query(
      "update category set nombre = ? where category_id = ?",
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

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query("delete from category where category_id = ?", [
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
