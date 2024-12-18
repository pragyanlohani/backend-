import express from "express"
import corse from "corse";
import cookieParser from "cookie-parser";


const app = express();

app.use(cros({
    origin:process.env.CROS_ORIGIN,
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())


// routes



import userRouter from "./routes/user.routs.js"



// routs declerations 

app.use("/api/v1 /users", userRouter)


export {app}; 