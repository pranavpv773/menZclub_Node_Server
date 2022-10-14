const mongoose = require("mongoose")
const bannerSchema = new mongoose.Schema(
    {
        banner_category: { type: String, required: true, },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        product_date: { type: Date, default: Date.now(), }
    }
)
const Banner = mongoose.model("Banner", bannerSchema);
module.exports = { Banner, bannerSchema };