require('dotenv').config()
const express =require('express')
const app= express()

const port=4000
const data={
    name:"shaurya",
    rollno:2210997216,
    marks:10
}
app.get('/',(req,res)=>{
   res.send("Kya haal hain bhai ke")
})
app.get('/profile',(req,res)=>{
   res.json(data)
})

app.listen(process.env.PORT,()=>{
    console.log("Listening at port "+port)
})