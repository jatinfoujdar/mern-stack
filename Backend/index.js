import  express  from "express";
import mongoose from "mongoose";
import "dotenv/config"


const PORT = process.env.PORT || 4000;
const app = express();

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