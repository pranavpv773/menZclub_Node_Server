const mongoose = require("mongoose");
const {productSchema} =require("./productAddModel.js")

const orderSchema = mongoose.Schema({
  products: [productSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  user_mail: {
    required: true,
    type: String,
  },
  orderedAt: {
    type: Number,
    required: true,
  },
  status: {
    bool: false,
    default: 0,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;