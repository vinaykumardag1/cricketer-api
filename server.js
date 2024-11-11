require("dotenv").config()
const express=require("express")
const cors=require("cors")

const api=require("./controllers/api")
const bodyParser = require("body-parser")
const app=express()

app.use(cors(
    {
        origin:'*',
    }
))

app.get("/",api.api_data)


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(3001,()=>{
    console.log("Server is running on 3001")
})