const mongoose = require("mongoose")
const {jhgvhjg ,productSchema} =require("./productAddModel")
const userSchema = new mongoose.Schema(
    {
        user_mail: { type: String , required : true , unique : true},
        user_name: { type: String },
        user_number: { type: Number ,required : true , unique : true},
        user_password: { type: String },
        user_isVerified: { type: Boolean },
        user_date: { type: Date, default: Date.now() },
        user_cart:[productSchema]
    }
)

const model = mongoose.model("userList", userSchema)

module.exports = model