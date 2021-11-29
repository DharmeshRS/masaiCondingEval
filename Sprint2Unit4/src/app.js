const mongoose=require('mongoose')

const express=require('express')
require("./db/conn")
const Job=require("./model/job")
const app=express()

const port=3000;
app.use(express.json())

// post jobs
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

//get all jobs
app.get("/jobs",async (req,res)=>{
    try{
        const alljobs=await Job.find()
        res.status(201).send(alljobs)
    }catch(err){
        res.status(400).send(err)
    }
})

//job type work from home
app.get("/jobtype/wfh",async (req,res)=>{
    try{
        const whf=await Job.find({jobtype:"WFH"})
        res.status(201).send(whf)
    }catch(err){
        res.status(400).send(err)
    }
})

//notice period 
app.get("/period/:noticeperiod",async (req,res)=>{
    try{
        const data=await Job.find({noticeperiod:req.params.noticeperiod})
        res.status(201).send(data)
    }catch(err){
        res.status(400).send(err)
    }
})


//company data
app.get("/company/:companyname",async (req,res)=>{
    try{
        const companydata=await Job.findOne({companyname:req.params.companyname})
        res.status(201).send(companydata)
    }catch(err){
        res.status(401).send(err)
    }
})

//rating
app.get("/rating",async (req,res)=>{
    try{
        const sortdata=await Job.find().sort({rating:-1})
        res.send(sortdata)
       
    }catch(err){
        res.status(400).send(err)
    }
})


//most openings using descending 
app.get("/most_openings/",async (req,res)=>{
    try{
        const sortdata=await Job.find().sort({openings:-1})
        res.status(201).send(sortdata)
       
    }catch(err){
        res.status(400).send(err)
    }
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})