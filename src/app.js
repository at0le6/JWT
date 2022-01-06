import express from "express";
import morgan from "morgan";
import products from "./routes/products.routes";
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/products', products)
app.get('/', (req, res) => {
    res.json('welcome');
})



export default app;