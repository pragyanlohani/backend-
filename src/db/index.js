import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB =  async() =>{
    try{

    const connection =  await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    console.log(`\n mongoDb is connected`)

    }catch(error){
        console.error("connection error",error)
        process.exit(1)
    }
}


export default connectDB