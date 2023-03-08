const express =require("express")
const cors=require("cors")
const {connection} = require("./config/db")
const {productRouter}  = require("./route/product.route")

require("dotenv").config()
const app=express()
app.use(express.json())

app.use(cors())

app.use("/products" , productRouter)

app.listen(8080 , async (req , res)=>{
    try{
  await connection
   console.log("connected to db")
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }
    console.log(`Running the port from 8080`)
})