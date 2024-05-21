import express from 'express'
import dotenv, { parse } from 'dotenv'
import bookRoute from "../Backend/Route/book.route.js"
import userRoute from "../Backend/Route/user.route.js"
import mongoose from 'mongoose';
import cors from "cors"

dotenv.config();
const app=express();

const port=process.env.PORT || 4000;
const MongoURL=process.env.MogoDBURL;

app.use(cors());
app.use(express.json());

try {
    mongoose.connect(MongoURL)
    console.log("Connected to the MogoDB");
} catch (error) {
    console.log("Error :" + error);
}

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`Server is listenoing on the port ${port}`);
})