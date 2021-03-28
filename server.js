const express = require("express")
const app = express()
const port = 3000

app.use("/src",express.static(__dirname+"/public"))
app.use("/game",express.static(__dirname+"/game"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/view/index.html")
})



app.listen(port,()=>{
    console.log("Server listening at port "+port)
})