const express = require("express");
const bannerRouter = express.Router();
const { Banner } = require("../model/bannerModel.js")



// Add banner
bannerRouter.post("/admin/add-banner", async (req, res) => {
    try {
        const { images, banner_category } = req.body;
        let banner = new Banner({
            banner_category,
            images,

        });
        banner = await banner.save();
        res.status(200).json({banner,"status": true, "message": "banner added successfully" });
    } catch (e) {
        res.status(500).json({"status": false, "message": e.message});
    }
});

// Get all your banner
bannerRouter.get("/api/menzclub/get-banner", async (req, res) => {
    try {
        const banner = await Banner.find({});
        res.json({banner,"status": true, "message": "banner added successfully"});
    } catch (e) {
        res.status(500).json({ status:"false",message: e.message });
    }
});
bannerRouter.get("/api/menzclub/banner/", async (req, res) => {
    try {
        const banner = await Banner.find({ banner_category: req.query.banner_category });
        res.status(200).json({ banner, "status": true, "message": "banner added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = bannerRouter;