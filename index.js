const express=require("express")
const app=new express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/view/main.html")
})

//Circle

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/view/circle.html")
})
app.post("/circle",(req,res)=>{
    const radius=req.body.radius
    const area=Math.PI*radius*radius
    res.send(`<h1>Area of Circle is ${area}</h1>`)
})

// Triangle 

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/view/tringle.html")
})
app.post("/triangle",(req,res)=>{
    const base=req.body.base
    const height=req.body.height
    const area=0.5*base*height
    res.send(`<h1>Area of Triangle is ${area}</h1>`)
})
app.get("/rectangle",(req,res)=>{
    res.sendFile(__dirname+"/view/rectangle.html")
})
app.post("/rectangle",(req,res)=>{
    const width=req.body.width
    const length=req.body.length
    const area=width*length
    res.send(`<h1>Area of Rectangle is ${area}</h1>`)
})

port=3000
app.listen(port,()=>{
    console.log("Server is running on the port number is "+port)
})