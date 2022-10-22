const mongoose = require("mongoose")
const { productSchema } =require("./productAddModel.js")
const cartSchema = new mongoose.Schema(
  {
    user_mail: { type: String, required: true },
    user_cart: [productSchema],
  }
)

const Cart = mongoose.model("cartList", cartSchema)

module.exports = { Cart, cartSchema };