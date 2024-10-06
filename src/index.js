
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import constants from './constants.js';

import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=> {
        console.log(`the server is running on the port${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.err("mongo db error", err)
}) 





















/*
import express from ("express");




const app = express();

;(async ()=>{
    try{
        await  mongoose.connect(`${process.env.MONFO_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("error",error)
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`the app is running on the port ${process.env.PORT}`)

        })

    }catch(error){
        console.log('errror',error)
        throw err
    }

})()
*/