import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import categoriaRoutes from "@Routes/category.routes";
import marcaRoutes from "@Routes/category.routes";
import unidadMedidaRoutes from "@Routes/category.routes";
import productoRoutes from "@Routes/product.routes";
import ventaRoutes from "@Routes/sale.routes"


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(marcaRoutes);
app.use(categoriaRoutes);
app.use(productoRoutes);
app.use(unidadMedidaRoutes);
app.use(ventaRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Endpoint Not Found'
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});