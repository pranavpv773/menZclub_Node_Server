const mongoose = require("mongoose")

const productInsertion = new mongoose.Schema(
    {
        product_name: { type: String , required : true},
        product_category: { type: String , required : true},
        product_color: { type: String, required : true},
        product_brand: { type: String, required : true },
        product_size: { type: Number ,required : true},
        product_material: {type: String, required : true},
        product_date: { type: Date, default: Date.now()}
    }
)

const productModel = mongoose.model("productInsertList", productInsertion)

module.exports = productModel