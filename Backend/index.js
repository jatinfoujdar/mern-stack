import  express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import morgan from "morgan";
import "dotenv/config"
import cookieParser from "cookie-parser";
import allRoutes from "./Routes/index.js"

const PORT = process.env.PORT || 4000;
const app = express();


//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());



//Routes
app.use("/api",allRoutes)


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected");
    } catch(error){
        console.log(error);
        process.exit(1);
    }     
}

app.listen(PORT , ()=>{
    connectDB()
    console.log(`server is running ${PORT}`);
})