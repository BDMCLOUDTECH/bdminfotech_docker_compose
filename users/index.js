import express from "express"
const app=express()
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
app.use(cors());
app.options("*", cors);
const port =process.env.PORT || 3000
app.get("/user",(req,res)=>{
    res.send(`this is the ${process.env.USER_END_POINT} and ${process.env.LOVE_FROM_DOCKER_USER}`)
})
app.listen(port,()=>{
    console.log(`the server for user is running on port ${port}`)
})