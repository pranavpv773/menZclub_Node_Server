const mongoose = require("mongoose")
//const {productSchema} =require("./productAddModel")
const cartSchema = new mongoose.Schema(
    {
        user_mail: { type: String , required : true },
        user_cart: [
            // {
            //   product: productSchema,
            //   // quantity: {
            //   //   type: Number,
            //   //   required: true,
            //   // },
            // },
          ],
    }
)

const Cart = mongoose.model("cartList", cartSchema)

module.exports = {Cart,cartSchema};