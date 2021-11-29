const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(()=>{
    console.log("connection Established...")
    console.log("If This is first time please insert data")
})
.catch((err)=>{
    console.log(err)
})