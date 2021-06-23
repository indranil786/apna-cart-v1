const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: "users",
  },
  orderid: {
    type: String,
    required: true,
    unique: true,
  },
  paymentid: {
    type: String,
    required: true,
    unique: true,
  },
  orderList: [
    {
      type: Object,
      required: true,
    },
  ],
  purchaseDate: {
    type: Date,
    default: Date.now(),
  },
  finalPrice: {
    type: Number,
    required: true,
  },
});
const Orders = new mongoose.model("orders", orderSchema);
module.exports = Orders;
