const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");
const Users = require("../models/user");
const isLoggedIn = require("../middlewares/isLoggedIn");
const urlStoring = require("../middlewares/previousUrl");
const Razorpay = require("razorpay");
const { v4: uuid } = require("uuid");
const crypto = require("crypto");
const Orders = require("../models/order");
const currentUrl=require("../middlewares/currentUrl")
require('dotenv').config();

const instance = new Razorpay({
  key_id: process.env.RZP_key_id,
  key_secret: process.env.RZP_key_secret
});
router.post("/user/order",isLoggedIn, (req, res) => {
  try{
  let reciept = "ODRCPT_ID_" + uuid().slice(-12, -1);
  const data = req.body;
  data.receipt = reciept;
  instance.orders
    .create(data)
    .then((order) => {
      order.rzp_key=process.env.RZP_key_id
      res.send(order);
    })
    .catch((err) => {
      req.flash('error', "There was a problem in the Network , please try again");
      res.send({"failure":"This payment cannot be done "})
    });
  }
  catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"})
  }
});
router.post("/user/order/verify", isLoggedIn,async (req, res) => {
  console.log("Order Verify")
  try{

    body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RZP_key_secret)
    .update(body.toString())
    .digest("hex");

  var response = { status: "failure" };
  if (expectedSignature === req.body.razorpay_signature) {
    try {
      const userObj = await Users.findById(req.user._id);
      let amount=req.body.order.amount/100;
      const data = {
        user: req.user,
        orderid: req.body.razorpay_order_id,
        paymentid: req.body.razorpay_payment_id,
        orderList: userObj.cart,
        purchaseDate: Date.now(),
        finalPrice: amount,
      };
      
      const orderObj = new Orders(data);
      userObj.orders.push(orderObj);
      await orderObj.save();
      userObj.cart.splice(0,userObj.orders.length)
      await userObj.save();
      req.flash("success","Your Order was placed successfully");
      response = { status: "success", orderId: req.body.razorpay_order_id };
    } catch (e) {
      console.log("There is a problem with orders");
      console.log(e);
      
    }
  }
  res.send(response);
  }
  catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"});
  }
});

router.get("/user/payment/:payment_id/:error_code",isLoggedIn,(req,res)=>{
  try{
  const error=req.session.paymentError
  res.render("user/paymentError",{error});
  }
  catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"});
  }
})
router.post("/user/order/paymentfail",isLoggedIn,(req,res)=>{
  try{
  req.session.paymentError=req.body.error;
  res.send({"redirect":`/user/payment/${req.body.error.payment_id}/${req.body.error.payment_id}`})
  }
  catch(e){
    console.log(e);
    res.status(404).render('error/error',{"status":"404"})
  }
})
module.exports = router;
