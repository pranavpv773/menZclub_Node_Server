const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const shoesSchema = new mongoose.Schema(
    {
        shoes_name: { type: String, required: true, },
        shoes_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        shoes_price: { type: Number, required: true, },
        shoes_offer: { type: Number, required: true, },
        shoes_category: { type: String, required: true, },
        shoes_collection: { type: String, required: true, },
        shoes_color: { type: String, required: true, },
        shoes_brand: { type: String, required: true, },
        shoes_fit: { type: String, required: true, },
        shoes_size: { type: Number, required: true, },
        shoes_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        shoes_date: { type: Date, default: Date.now(), }
    }
)
const Shoes = mongoose.model("Shoes", shoesSchema);
module.exports = { Shoes, shoesSchema };