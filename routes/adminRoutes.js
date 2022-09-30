const express = require("express");
const adminRouter = express.Router();
const { Product } = require("../model/productAddModel.js")



// Add product
adminRouter.post("/admin/add-product", async (req, res) => {
    try {
        const { product_name, product_price, images, product_offer, product_color, product_category, product_brand, product_size, product_material, product_description } = req.body;
        let product = new Product({
            product_name,
            product_price,
            images,
            product_offer,
            product_color,
            product_category,
            product_brand,
            product_size,
            product_material,
            product_description,

        });
        product = await product.save();
        res.status(200).json({status:"True",message:"Product added succesfully"});
    } catch (e) {
        res.status(500).json({status:"True",message: e.message });
    }
});

// Get all your products
adminRouter.get("/api/menzclub/get-products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (e) {
        res.status(500).json({ status:"false",message: e.message });
    }
});
module.exports = adminRouter;