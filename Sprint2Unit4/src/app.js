const mongoose=require('mongoose')

const express=require('express')
require("./db/conn")
const Job=require("./model/job")
const app=express()

const port=3000;
app.use(express.json())

app.post("/",async (req,res)=>{
    try{
        console.log(req.body)
       const job= new Job(req.body)
       const add=await job.save()
       res.status(201).send(add)
    }catch(err){
        res.status(400).send(err)
    }
})


app.get("/jobs",async (req,res)=>{
    try{
        const alljobs=await Job.find()
        res.send(alljobs)
    }catch(err){
        res.send(err)
    }
})

app.get("/wfh",async (req,res)=>{
    try{
        const whf=await Job.find({jobtype:"WFH"})
        res.send(whf)
    }catch(err){
        res.send(err)
    }
})


app.get("/period/:period",async (req,res)=>{
    try{
        const data=await Job.find()
        res.send("get for all data of notice period")
    }catch(err){
        res.send(err)
    }
})

app.get("/companyname",async (req,res)=>{
    try{
        res.send("company data")
    }catch(err){
        res.send(err)
    }
})

app.get("/sort/rating",async (req,res)=>{
    try{
        res.send("get for all data method")
    }catch(err){
        res.send(err)
    }
    })

app.get("/most_openings/",async (req,res)=>{
    try{
        res.send("get for all data method")
    }catch(err){
        res.send(err)
    }
    })

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})