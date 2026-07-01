import express from "express"
import cors from "cors";

const app=express()
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello your server is ready")
})

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            name:"sameer ali",
            description:"hey i am sameer ali from gupis ghizer jandrote a front develiper at techzoid"
        },
        {
            id:2,
            name:"mumtaz wali",
            description:"hey i am mumtaz wali from  ghizer  a front developer at arbob"
        },
        {
            id:3,
            name:"ali raza",
            description:"hey i am ali raza from  ghizer  a front developer at arbob"
        },
        {
            id:4,
            name:"ali",
            description:"hey i am ali from  ghizer  a front developer at uconnect"
        },
    ]
    res.json(jokes)
})
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})