import express from "express"
const app=express()
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
app.use(cors());
app.options("*", cors);
const port =process.env.PORT || 3001
app.get("/contact",(req,res)=>{

    res.send(`this is the ${process.env.CONTACT_END_POINT} and ${process.env.LOVE_FROM_DOCKER_CONTACT}`)
})
app.listen(port,()=>{
    console.log(`the server for contact is running on port ${port}`)
})