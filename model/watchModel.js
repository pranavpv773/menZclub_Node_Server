const mongoose = require("mongoose")
//const ratingSchema = require("./rating");
const watchSchema = new mongoose.Schema(
    {
        watch_name: { type: String, required: true, },
        watch_description: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        watch_price: { type: Number, required: true, },
        watch_offer: { type: Number, required: true, },
        watch_category: { type: String, required: true, },
        watch_collection: { type: String, required: true, },
        watch_color: { type: String, required: true, },
        watch_brand: { type: String, required: true, },
        watch_fit: { type: String, required: true, },
        watch_size: { type: Number, required: true, },
        watch_material: { type: String, required: true, },
        // ratings: [ratingSchema],
        watch_date: { type: Date, default: Date.now(), }
    }
)
const Watch = mongoose.model("Watch", watchSchema);
module.exports = { Watch, watchSchema };