const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const tShirtSchema = new mongoose.Schema(
    {
        tShirt_name: { type: String, required: true, },
        tShirt_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        tShirt_price: { type: Number, required: true, },
        tShirt_offer: { type: Number, required: true, },
        tShirt_category: { type: String, required: true, },
        tShirt_collection: { type: String, required: true, },
        tShirt_color: { type: String, required: true, },
        tShirt_brand: { type: String, required: true, },
        tShirt_fit: { type: String, required: true, },
        tShirt_size: { type: Number, required: true, },
        tShirt_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        tShirt_date: { type: Date, default: Date.now(), }
    }
)
const Tshirt = mongoose.model("Tshirt", tShirtSchema);
module.exports = { Tshirt, tShirtSchema };
