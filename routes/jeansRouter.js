const express = require("express");
const jeansRouter = express.Router();
const { Jeans } = require("../model/jeansModel.js")



// Add product
jeansRouter.post("/admin/add-jeans", async (req, res) => {
    try {
        const { jeans_name, jeans_price, images, jeans_fit, jeans_offer, jeans_collection, jeans_color, jeans_category, jeans_brand, jeans_size, jeans_material, jeans_description } = req.body;
        let jeans = new Jeans({
            jeans_name,
            jeans_price,
            images,
            jeans_collection,
            jeans_offer,
            jeans_color,
            jeans_fit,
            jeans_category,
            jeans_brand,
            jeans_size,
            jeans_material,
            jeans_description,

        });
        jeans = await jeans.save();
        res.status(200).json({"status": true, "message": "Jeans added successfully" });
    } catch (e) {
        res.status(500).json({"status": false, "message": e.message});
    }
});

// Get all your shirt
jeansRouter.get("/api/menzclub/get-jeans", async (req, res) => {
    try {
        const jeans = await Jeans.find({});
    
        res.status(200).json({jeans, "status":true,message: 'Jeans fetched succesfully'});
    } catch (e) {
        res.status(500).json({ "status":false,message: e.message });
    }
});
module.exports = jeansRouter;