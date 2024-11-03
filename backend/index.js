import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({})

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT


//routes
app.use("/api/v1/user", userRoute);
//http://localhost:8080/api/v1/user/register


app.listen( PORT, ()=>{
  connectDB();
  console.log(`server is running on ${PORT}`);
  
})