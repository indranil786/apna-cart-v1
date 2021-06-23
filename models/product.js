const mongoose=require("mongoose")
const Reviews=require("./reviews")
const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    image:{
        data :Buffer,
        contentType:String
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String
    },
    reviews:[
        {
            type:mongoose.ObjectId,
            ref:"reviews"
        },
    ]
        
    

})
const Product=new mongoose.model("products",productSchema)
module.exports=Product;