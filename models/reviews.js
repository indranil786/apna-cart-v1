const mongoose= require("mongoose");
const reviewSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    }
})
//create a reviews database.
const Reviews= new mongoose.model("reviews",reviewSchema);
module.exports=Reviews;