require('dotenv').config()
const express =require('express')
const app= express()

const port=4000
app.get('/',(req,res)=>{
   res.send("Kya haal hain bhai ke")
})


app.listen(process.env.PORT,()=>{
    console.log("Listening at port "+port)
})