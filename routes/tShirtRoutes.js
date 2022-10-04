const express = require("express");
const tShirtRouter = express.Router();
const { Tshirt } = require("../model/tShirtModel.js")



// Add product
tShirtRouter.post("/admin/add-Tshirt", async (req, res) => {
    try {
        const { tShirt_name, tShirt_price, images, tShirt_fit, tShirt_offer, tShirt_collection, tShirt_color, tShirt_category, tShirt_brand, tShirt_size, tShirt_material, tShirt_description } = req.body;
        let tShirt = new Tshirt({
            tShirt_name,
            tShirt_price,
            images,
            tShirt_collection,
            tShirt_offer,
            tShirt_color,
            tShirt_fit,
            tShirt_category,
            tShirt_brand,
            tShirt_size,
            tShirt_material,
            tShirt_description,

        });
        tShirt = await tShirt.save();
        res.status(200).json({ "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ "status": false, "message": e.message });
    }
});

// Get all your shirt
tShirtRouter.get("/api/menzclub/get-Tshirt", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({});
        res.status(200).json({tShirt,"status": true, "message": "Shirt added successfully"});
    } catch (e) {
        res.status(500).json({ status: "false", message: e.message });
    }
});
module.exports = tShirtRouter;