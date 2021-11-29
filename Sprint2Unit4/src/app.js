const mongoose=require('mongoose')

const express=require('express')
require("./db/conn")
const Job=require("./model/job")
const app=express()

const port=3000;

app.get("/jobs",async (req,res)=>{
    try{
        res.send("get method")
    }catch(err){
        res.send(err)
    }
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})