const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Product=require('../models/product')
const Order = require('../models/order')
const passport = require("passport");
const previousUrl=require("../middlewares/previousUrl")
const isLoggedIn=require("../middlewares/isLoggedIn")
const currentUrl=require("../middlewares/currentUrl")
const isAdmin=require("../middlewares/isAdmin")
router.get("/admin/home",previousUrl,isLoggedIn,isAdmin, (req, res) => {
    try{
    res.render("admin/adminHome.ejs");
    }
    catch(e){
        console.log(e);
        res.status(404).render('error/error',{"status":"404"})

    }
})
router.get("/admin/products",previousUrl,isLoggedIn,isAdmin,async (req,res)=>{
    try{
    const data = await Product.find({});
    res.render("admin/adminProducts.ejs",{data});
    }
    catch(e){
        console.log(e);
        res.status(404).render('error/error',{"status":"404"})

    }
})
router.get("/admin/user",previousUrl,isLoggedIn,isAdmin,async (req,res)=>{
    try{
    const person=await User.find({}).populate({
        path: 'orders cart.item',
        populate:{
            path: 'orderList.item',
            model:Product
        }
    });
res.render('admin/adminUser',{person});
    }
    catch(e){
        console.log(e);
        res.status(404).render('error/error',{"status":"404"})

    }

})
router.delete("/admin/user/:id",previousUrl,isLoggedIn,isAdmin,async (req, res) => {
    try{
    const {id}=req.params
    try{
    await User.findByIdAndDelete(id);
    req.flash('success',`The user was deleted successfully !`)
    res.redirect('/admin/user');
    }
    catch(err){
        req.flash('error','Sorry There was a problem in deleting the user').
        res.redirect('/admin/user')
    }
}catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"})

}
})
router.get("/admin/orders",previousUrl,isLoggedIn,isAdmin,async(req,res)=>{
    try{
    const orders= await Order.find({}).populate('user').populate({ 
           path:'orderList.item',
           model:Product        
    })
    
    res.render('admin/adminOrders',{orders})
//    res.send(orders);
}
catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"})

}
    // res.send({orders});
})
module.exports=router;