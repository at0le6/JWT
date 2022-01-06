import mongoose from "mongoose";

const connectDB = (uri) => {
    return mongoose.connect(uri).then(db => console.log("Db connected")).catch(error => console.log(error))
}
module.exports = connectDB