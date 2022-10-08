const mongoose = require("mongoose")
const {productSchema} =require("./productAddModel")
const userSchema = new mongoose.Schema(
    {
        user_mail: { type: String , required : true , unique : true},
        user_name: { type: String },
        user_number: { type: Number ,required : true , unique : true},
        user_password: { type: String },
        user_isVerified: { type: Boolean },
        user_date: { type: Date, default: Date.now() },
        address: {
            type: String,
            default: "",
          },
        user_cart: [
            {
              product: productSchema,
              quantity: {
                type: Number,
                required: true,
              },
            },
          ],
    }
)

const model = mongoose.model("userList", userSchema)

module.exports = {model,userSchema};