const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    company_name:String,
    city:String,
    skill:String,
    jobtype:String,
    noticeperiod:String,
    rating:Number,
    openings:Number

})

const Job=new mongoose.model("Job",jobSchema)

module.exports=Job