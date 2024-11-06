import express, { urlencoded } from "express";
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";
import cors from "cors"

dotenv.config({})

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOption = {
  origin:"http://localhost:5173",
  credentials:true
}
app.use(cors(corsOption));

const PORT = process.env.PORT


//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message",messageRoute);
//http://localhost:8080/api/v1/user/register


app.listen( PORT, ()=>{
  connectDB();
  console.log(`server is running on ${PORT}`);
  
})