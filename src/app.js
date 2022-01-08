import express from "express";
import morgan from "morgan";
import products from "./routes/products.routes";
import auth from "./routes/auth.routes";
import userRoute from "./routes/user.routes";
import errorHandler from "./middleware/error-handler";
import { createRoles } from "./libs/initialSetUp";
const app = express();
//creation of baisc roles models
createRoles();
//dev stuff
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/products', products);
app.use('/api/auth', auth)
app.use('/api/users', userRoute)
    //middlewares
app.use(errorHandler)
app.get('/', (req, res) => {
    res.json('welcome');
})



export default app;