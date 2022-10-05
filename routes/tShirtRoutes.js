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
// /api/products/search/i
tShirtRouter.get("/api/menzclub/t-shirt/", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({ tShirt_category: req.query.tShirt_category });
        res.status(200).json({tShirt, "status": true, "message": "Shirt added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
tShirtRouter.get("/api/menzclub/t-shirt/collection/", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({ tShirt_collection: req.query.tShirt_collection });
        res.status(200).json({tShirt, "status": true, "message": "Shirt added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
tShirtRouter.get("/api/menzclub/t-shirt/color/", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({ tShirt_color: req.query.tShirt_color });
        res.status(200).json({ tShirt, "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
tShirtRouter.get("/api/menzclub/t-shirt/material/", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({ tShirt_material: req.query.tShirt_material });
        res.status(200).json({ tShirt, "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
tShirtRouter.get("/api/menzclub/t-shirt/fit/", async (req, res) => {
    try {
        const tShirt = await Tshirt.find({ tShirt_fit: req.query.tShirt_fit });
        res.status(200).json({ tShirt, "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
module.exports = tShirtRouter;