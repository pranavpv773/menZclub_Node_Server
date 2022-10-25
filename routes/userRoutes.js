const express = require("express");
const userRouter = express.Router();
const { model } = require("../model/signupModel.js")
const { Cart } = require("../model/cart.js");
//const { Model } = require("mongoose");
const  Order  = require("../model/order.js");


// Get all users
userRouter.get("/api/menzclub/get-users", async (req, res) => {
  try {
    const user = await model.find({ user_mail: req.query.user_mail });
    console.log(user);
    res.status(200).json({ user, "status": true, message: 'user fetched succesfully' });
  } catch (e) {
    res.status(500).json({ "status": false, message: e.message });
  }
});
userRouter.post("/api/add-to-cart", async (req, res) => {
  try {
    const { user_mail, user_cart } = req.body;
    let cart = new Cart({
      user_mail,
      user_cart,
    });
    cart = await cart.save();
    res.status(200).json({"status": true, "message": "Product added to cart" });
  } catch (e) {
    res.status(500).json({ "status": false, "message": e.message });
  }
});
userRouter.get("/api/menzclub/get-cart/", async (req, res) => {
  try {
    const cart = await Cart.find({user_mail: req.query.user_mail});
    res.status(200).json({ cart, "status": true, "message": "cart fetched successfully" });
  } catch (e) {
    res.status(500).json({ status: "false", message: e.message });
  }
});
userRouter.post("/api/order", async (req, res) => {
  try {
    const { cart, totalPrice, address } = req.body;
    let products = [];

    // for (let i = 0; i < cart.length; i++) {
    //   let product = await Product.findById(cart[i].product._id);
    //   if (product.quantity >= cart[i].quantity) {
    //     product.quantity -= cart[i].quantity;
    //     products.push({ product, quantity: cart[i].quantity });
    //     await product.save();
    //   } else {
    //     return res
    //       .status(400)
    //       .json({ msg: `${product.name} is out of stock!` });
    //   }
    // }

    let user = await model.findById(req.user);
    user.cart = [];
    user = await user.save();

    let order = new Order({
      products,
      totalPrice,
      address,
      userId: req.user,
      orderedAt: new Date().getTime(),
    });
    order = await order.save();
    res.json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

userRouter.get("/api/orders/me", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user });
    res.json({orders, "status": true, "message": "Order added successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = userRouter;
