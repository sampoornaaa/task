import  Express  from "express";
import todoRoute from "./routes/todoRoutes.js";
import Mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors"

const app = Express()

app.use(Express.json())
config()
app.use(cors())
app.use(todoRoute)

Mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB connection done")
})
.catch((err)=>{
    console.log("error")
})
app.listen(5000,()=>{
    console.log("listen to PORT 5000")
})

