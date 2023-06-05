import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import userRoutes from "./routers/userResistrationRoutes/useroutes.js"
import paymentgatewayroutes from "./routers/paymentgateway/paymentgateway.js"
const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const connect=async()=>{
    try {
       await mongoose.connect(process.env.MONGO)
       console.log("connected to Database")
    } catch (error) {
        console.log(error)
    }
}

mongoose.connection.on("disconnect",()=>{
    console.log("MongoDB disconnected")
})

// all routes here 
app.use("/v1/api/user/",userRoutes)
app.use("/v1/api/paymentgateway/",paymentgatewayroutes)



app.listen(9005,()=>{
    connect()
    console.log("Connected to Backend");
})
