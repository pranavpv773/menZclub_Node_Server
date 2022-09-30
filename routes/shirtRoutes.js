const express = require("express");
const shirtRouter = express.Router();
const { Shirt } = require("../model/shirtModel.js")



// Add product
shirtRouter.post("/admin/add-shirt", async (req, res) => {
    try {
        const { shirt_name, shirt_price, images, shirt_fit, shirt_offer, shirt_collection, shirt_color, shirt_category, shirt_brand, shirt_size, shirt_material, shirt_description } = req.body;
        let shirt = new Shirt({
            shirt_name,
            shirt_price,
            images,
            shirt_collection,
            shirt_offer,
            shirt_color,
            shirt_fit,
            shirt_category,
            shirt_brand,
            shirt_size,
            shirt_material,
            shirt_description,

        });
        shirt = await shirt.save();
        res.status(200).json({"status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({"status": false, "message": e.message});
    }
});

// Get all your shirt
shirtRouter.get("/api/menzclub/get-shirt", async (req, res) => {
    try {
        const shirt = await Shirt.find({});
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ status:"false",message: e.message });
    }
});
module.exports = shirtRouter;