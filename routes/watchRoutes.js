const express = require("express");
const watchRouter = express.Router();
const { Watch } = require("../model/watchModel.js")



// Add product
watchRouter.post("/admin/add-watches", async (req, res) => {
    try {
        const { watch_name, watch_price, images, watch_fit, watch_offer, watch_collection, watch_color, watch_category, watch_brand, watch_size, watch_material, watch_description } = req.body;
        let watch = new Watch({
            watch_name,
            watch_price,
            images,
            watch_collection,
            watch_offer,
            watch_color,
            watch_fit,
            watch_category,
            watch_brand,
            watch_size,
            watch_material,
            watch_description,

        });
        watch = await watch.save();
        res.status(200).json({"status": true, "message": "watch added successfully" });
    } catch (e) {
        res.status(500).json({"status": false, "message": e.message});
    }
});

// Get all your watches
watchRouter.get("/api/menzclub/get-watches", async (req, res) => {
    try {
        const watch = await Watch.find({});
    
        res.status(200).json({watch, "status":true,message: 'watch fetched succesfully'});
    } catch (e) {
        res.status(500).json({ "status":false,message: e.message });
    }
});
watchRouter.get("/api/menzclub/watch/", async (req, res) => {
    try {
        const watch = await Watch.find({ watch_category: req.query.watch_category });
        res.status(200).json({watch, "status": true, "message": "watch_category added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
watchRouter.get("/api/menzclub/watch/collection/", async (req, res) => {
    try {
        const watch = await Watch.find({ watch_collection: req.query.watch_collection });
        res.status(200).json({watch, "status": true, "message": "watch_collection added successfully"});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
watchRouter.get("/api/menzclub/watch/color/", async (req, res) => {
    try {
        const watch = await Watch.find({ watch_color: req.query.watch_color });
        res.status(200).json({ watch, "status": true, "message": "watch_color added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
watchRouter.get("/api/menzclub/watch/material/", async (req, res) => {
    try {
        const watch = await Watch.find({ watch_material: req.query.watch_material });
        res.status(200).json({ watch, "status": true, "message": "watch_material added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
watchRouter.get("/api/menzclub/watch/price/", async (req, res,price) => {
    try {
        const watch = await Watch.find({ watch_price: req.query.watch_price<price});
        res.status(200).json({ watch, "status": true, "message": "watch_fit added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
module.exports = watchRouter;