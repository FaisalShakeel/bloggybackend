const express= require('express')
const app= express()
const PORT = process.env.PORT||4001
app.get("/",(req,res)=>{
    res.json({title:"Next JS Server Side Rendering",description:"In this article,we will be learning about SSR In Next JS"})
})
app.listen(PORT,()=>{
    console.log("Listening ON PORT:",PORT)

})