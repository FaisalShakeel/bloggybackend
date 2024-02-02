const express= require('express')
const app= express()
const PORT = process.env.PORT||4001
app.get("/",(req,res)=>{
    res.json({title:"Next JS Server Side Rendering",description:"In this article,we will be learning about SSR In Next JS"})
})
app.get("/getprofile",(req,res)=>{
    res.json({name:"Faisal Shakeel",bio:"Full Stack Developer",skills:["JS","TS","Next JS","React Js","Node Js"]})
})
app.listen(PORT,()=>{
    console.log("Listening ON PORT:",PORT)

})
module.exports = app
