import { pool } from "../db";
import { Request, Response } from "express";

export const getProduct = async (req: Request, res: Response) => {
  const [tabla] = await pool.query("select p.id, p.nombre, p.precio, p.costo, p.stock,m.nombre as marca,um.nombre as unidadMedida," +
    "p.id_unidadmedida , p.id_categoria , p.id_marca, " +
    "c.nombre as categoria from producto p inner join marca m on p.id_marca = m.id inner join UnidadMedida um " +
    "on p.id_unidadmedida = um.id inner join Categoria c on p.id_categoria = c.id");
  res.send(tabla);
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, precio, costo, stock, id_marca, id_unidadmedida, id_categoria } = req.body;
    await pool.query(
      "insert into producto (id,nombre,precio,costo,stock,id_marca,id_unidadmedida,id_categoria) values (null,?,?,?,?,?,?,?)",
      [nombre, precio, costo, stock, id_marca, id_unidadmedida, id_categoria]
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
    const { id, nombre, precio, costo, stock, id_marca, id_unidadmedida, id_categoria } = req.body;
    console.log(req.body);
    const [result]: any = await pool.query(
      "update producto set nombre = ? , precio = ? , costo = ?  , stock = ? , id_marca = ? , id_unidadmedida = ? , id_categoria = ? where id = ?",
      [nombre, precio, costo, stock, id_marca, id_unidadmedida, id_categoria, id]
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
    const { id } = req.params;
    const [result]: any = await pool.query("delete from producto where id = ?", [
      id,
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
