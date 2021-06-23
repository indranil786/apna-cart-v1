const mongoose = require('mongoose');
const products=require('./product')
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate=require('mongoose-findorcreate');
const userSchema =mongoose.Schema({
    username:{
        type:String
    },
    googleid:{
        type:String
    },
    email:{
        type:String
    },
    photo:{
        type:String
    },
    image:{
      data:Buffer,
      contentType:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    cart:[
        {
        item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
        },
        quantity:{
            type:Number,
            default:1
        }
    }],
    orders:[{
        type:mongoose.ObjectId,
        ref:"orders"
    }],
    role:{
        type:String,
        default:"Customer"
    }
})
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User= mongoose.model("users",userSchema)
module.exports=User;