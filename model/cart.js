// const mongoose = require("mongoose")
// //const {productSchema} =require("./productAddModel")
// const cartSchema = new mongoose.Schema(
//     {
//         user_mail: { type: String , required : true , unique : true},
//         user_id: { type: String },
//         cart_number: { type: Number ,required : true , unique : true},
//         cart_password: { type: String },
//         cart_isVerified: { type: Boolean },
//         cart_date: { type: Date, default: Date.now() },
//         address: {
//             type: String,
//             default: "",
//           },
//         // user_cart: [
//         //     {
//         //       product: productSchema,
//         //       quantity: {
//         //         type: Number,
//         //         required: true,
//         //       },
//         //     },
//         //   ],
//     }
// )

// const Cart = mongoose.model("userList", cartSchema)

// module.exports = {Cart,cartSchema};