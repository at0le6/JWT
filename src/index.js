import app from './app';
import connectDB from "./database";
require('dotenv').config();


const port = process.env.PORT || 3000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port);
    } catch (error) {
        console.log(error);
    }
}
start();
console.log('Server start on port', port);