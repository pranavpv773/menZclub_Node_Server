const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const jeansSchema = new mongoose.Schema(
    {
        jeans_name: { type: String, required: true, },
        jeans_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        jeans_price: { type: Number, required: true, },
        jeans_offer: { type: Number, required: true, },
        jeans_category: { type: String, required: true, },
        jeans_collection: { type: String, required: true, },
        jeans_color: { type: String, required: true, },
        jeans_brand: { type: String, required: true, },
        jeans_fit: { type: String, required: true, },
        jeans_size: { type: Number, required: true, },
        jeans_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        jeans_date: { type: Date, default: Date.now(), }
    }
)
const Jeans = mongoose.model("Jeans", jeansSchema);
module.exports = { Jeans, jeansSchema };