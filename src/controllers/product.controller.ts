import { pool } from "../db";
import { Request, Response } from "express";

export const getProduct = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("select * from view_product");
  res.send(tabla);
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { descripcion, unite_price, cost, stock, brand_id, unit_id, category_id } = req.body;
    await pool.query(
      "insert into product (product_id,descripcion,unite_price,cost,stock,brand_id,unit_id,category_id) values (null,?,?,?,?,?,?,?)",
      [descripcion, unite_price, cost, stock, brand_id, unit_id, category_id]
    );
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { product_id , descripcion, unite_price, cost, stock, brand_id, unit_id, category_id } = req.body;
    const [result]: any = await pool.query(
      "update product set descripcion = ? , unite_price = ? , cost = ?  , stock = ? , brand_id = ? , unit_id = ? , category_id = ? where product_id = ?",
      [descripcion, unite_price, cost, stock, brand_id, unit_id, category_id, product_id]
    );
    

    result.affectedRows <= 0
      ? res.status(404).json({
        message: "Producto no encontrado",
      })
      : res.status(200).json({
        message: "Producto actualizado con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params;
    const [result]: any = await pool.query("delete from product where product_id = ?", [
      product_id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
        message: "Producto no encontrado",
      })
      : res.status(200).json({
        message: "Producto eliminado con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};
