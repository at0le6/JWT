import express from "express";
import morgan from "morgan";
import products from "./routes/products.routes";
import auth from "./routes/auth.routes";
import { createRoles } from "./libs/initialSetUp";
const app = express();
createRoles();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/products', products);
app.use('/api/auth',auth)
app.get('/', (req, res) => {
    res.json('welcome');
})



export default app;