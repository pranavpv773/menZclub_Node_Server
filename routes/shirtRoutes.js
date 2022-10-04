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
        res.status(200).json({ "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ "status": false, "message": e.message });
    }
});

// Get all your shirt
shirtRouter.get("/api/menzclub/get-shirt", async (req, res) => {
    try {
        const shirt = await Shirt.find({});
        res.status(200).json({ shirt, "status": true, "message": "Shirt added successfully" });
    } catch (e) {
        res.status(500).json({ status: "false", message: e.message });
    }
});
// /api/products/search/i
shirtRouter.get("/api/menzclub/", async (req, res) => {
    try {
        const shirt = await Shirt.find({ shirt_category: req.query.shirt_category });
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shirtRouter.get("/api/menzclub/collection/", async (req, res) => {
    try {
        const shirt = await Shirt.find({ shirt_collection: req.query.shirt_collection });
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shirtRouter.get("/api/menzclub/color/", async (req, res) => {
    try {
        const shirt = await Shirt.find({ shirt_color: req.query.shirt_color});
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shirtRouter.get("/api/menzclub/material/", async (req, res) => {
    try {
        const shirt = await Shirt.find({ shirt_material: req.query.shirt_material});
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
shirtRouter.get("/api/menzclub/size/", async (req, res) => {
    try {
        const shirt = await Shirt.find({ shirt_size: req.query.shirt_size});
        res.json(shirt);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
module.exports = shirtRouter;