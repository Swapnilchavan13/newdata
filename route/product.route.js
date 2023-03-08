const express = require("express");
const {productModel} = require("../model/Product.model")

const productRouter = express.Router()


productRouter.get("/" , async(req , res)=>{
    let product = await productModel.find();
  res.send(product); 
})


productRouter.get("/:id", async (req, res) => {
    let id=req.params.id;
    id.toString()
  
    let products = await productModel.find({_id:id});
    res.send(products);
    // console.log(products);
  });


module.exports = {
    productRouter
}



