const mongoose = require("mongoose");

const product=mongoose.model(
    "products",
    mongoose.Schema({
        productName: String,
        productDescritpion:String,
        productPrice:Number,
        productImage:String,
        productId: String
    },{
        timestamp:true
    })
)

module.exports={product}