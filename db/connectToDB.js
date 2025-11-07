import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const MONGO_URI = process.env.MONGO_URI;

export default async function connectToDB() {
    return mongoose.connect(MONGO_URI).then(()=>{
        console.log("Connected to Database!");
    }).catch(e=>{
        console.log("An error occured while connecting to database!");
        console.log(e)
    })
}