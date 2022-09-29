const express = require("express");
const adminRouter = express.Router();
const Product = require("../model/productAddModel.js")



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
        res.json(product);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Get all your products
adminRouter.get("/admin/get-products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
module.exports = adminRouter;