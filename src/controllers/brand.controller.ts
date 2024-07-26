import { pool } from "../db";
import { Request, Response } from "express";

export const getBrand = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("select * from brand");
  res.send(tabla);
};

export const createBrand = async (req: Request, res: Response) => {
  try {
    const { descripcion } = req.body;
    await pool.query("insert into brand values(null,?)", [descripcion]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateBrand = async (req: Request, res: Response) => {
  try {
    const { descripcion, brand_id } = req.body;
    const [result]: any = await pool.query(
      "update brand set descripcion = ? where brand_id = ?",
      [descripcion, brand_id]
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

export const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { brand_id } = req.params;
    const [result]: any = await pool.query("delete from brand where brand_id = ?", [
      brand_id,
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
