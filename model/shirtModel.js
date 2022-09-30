const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const shirtSchema = new mongoose.Schema(
    {
        shirt_name: { type: String, required: true, },
        shirt_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        shirt_price: { type: Number, required: true, },
        shirt_offer: { type: Number, required: true, },
        shirt_category: { type: String, required: true, },
        shirt_collection: { type: String, required: true, },
        shirt_color: { type: String, required: true, },
        shirt_brand: { type: String, required: true, },
        shirt_fit: { type: String, required: true, },
        shirt_size: { type: Number, required: true, },
        shirt_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        shirt_date: { type: Date, default: Date.now(), }
    }
)
const Shirt = mongoose.model("Shirt", shirtSchema);
module.exports = { Shirt, shirtSchema };