const express = require("express");
const shoesRouter = express.Router();
const { Shoes } = require("../model/shoesModel.js")



// Add product
shoesRouter.post("/admin/add-shoes", async (req, res) => {
    try {
        const { shoes_name, shoes_price, images, shoes_fit, shoes_offer, shoes_collection, shoes_color, shoes_category, shoes_brand, shoes_size, shoes_material, shoes_description } = req.body;
        let shoes = new Shoes({
            shoes_name,
            shoes_price,
            images,
            shoes_collection,
            shoes_offer,
            shoes_color,
            shoes_fit,
            shoes_category,
            shoes_brand,
            shoes_size,
            shoes_material,
            shoes_description,

        });
        shoes = await shoes.save();
        res.status(200).json({"status": true, "message": "shoes added successfully" });
    } catch (e) {
        res.status(500).json({"status": false, "message": e.message});
    }
});

// Get all your shoes
shoesRouter.get("/api/menzclub/get-shoes", async (req, res) => {
    try {
        const shoes = await Shoes.find({});
    
        res.status(200).json({shoes, "status":true,message: 'shoes fetched succesfully'});
    } catch (e) {
        res.status(500).json({ "status":false,message: e.message });
    }
});
shoesRouter.get("/api/menzclub/shoes/", async (req, res) => {
    try {
        const shoes = await Shoes.find({ shoes_category: req.query.shoes_category });
        res.status(200).json({shoes, "status": true, "message": "shoes_category added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shoesRouter.get("/api/menzclub/shoes/collection/", async (req, res) => {
    try {
        const shoes = await Shoes.find({ shoes_collection: req.query.shoes_collection });
        res.status(200).json({shoes, "status": true, "message": "shoes_collection added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shoesRouter.get("/api/menzclub/shoes/color/", async (req, res) => {
    try {
        const shoes = await Shoes.find({ shoes_color: req.query.shoes_color });
        res.status(200).json({ shoes, "status": true, "message": "shoes_color added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shoesRouter.get("/api/menzclub/shoes/size/", async (req, res) => {
    try {
        const shoes = await Shoes.find({ shoes_size: req.query.shoes_size });
        res.status(200).json({ shoes, "status": true, "message": "shoes_material added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shoesRouter.get("/api/menzclub/shoes/fit/", async (req, res) => {
    try {
        const shoes = await Shoes.find({ shoes_fit: req.query.shoes_fit });
        res.status(200).json({ shoes, "status": true, "message": "shoes_fit added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
module.exports = shoesRouter;