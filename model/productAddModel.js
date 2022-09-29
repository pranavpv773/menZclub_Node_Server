const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const productSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true, },
        product_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        product_price: { type: Number, required: true, },
        product_offer: { type: Number, required: true, },
        product_category: { type: String, required: true, },
        product_color: { type: String, required: true, },
        product_brand: { type: String, required: true, },
        product_size: { type: Number, required: true, },
        product_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        product_date: { type: Date, default: Date.now(), }
    }
)
const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema };