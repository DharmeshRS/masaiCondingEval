const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    company_name:String,
    city:String,
    skill:String,
    job_type:String,
    notice_period:String,
    rating:Number,
    openings:Number

})

const Job=new mongoose.model("Job",jobSchema)

module.exports=Job