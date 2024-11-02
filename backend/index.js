import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database.js";

const app = express();

dotenv.config({})
const PORT = process.env.PORT

app.listen( PORT, ()=>{
  connectDB();
  console.log(`server is running on ${PORT}`);
  
})