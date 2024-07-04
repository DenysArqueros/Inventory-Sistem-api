import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import categoryRoutes from "@Routes/category.routes";
import brandRoutes from "@Routes/brand.routes";
import unitMeasurementRoutes from "@Routes/unitMeasurement.routes";
import productRoutes from "@Routes/product.routes";
import ventaRoutes from "@Routes/sale.routes"


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(brandRoutes);
app.use(categoryRoutes);
app.use(unitMeasurementRoutes);
app.use(productRoutes);
app.use(ventaRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Endpoint Not Found'
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});