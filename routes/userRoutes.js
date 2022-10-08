const express = require("express");
const userRouter = express.Router();
const { model } = require("../model/signupModel.js")
const { Product } = require("../model/productAddModel.js");



// Get all your watches
userRouter.get("/api/menzclub/get-users", async (req, res) => {
    try {
        const user = await model.find({user_mail:req.query.user_mail});
    console.log(user);
        res.status(200).json({user, "status":true,message: 'user fetched succesfully'});
    } catch (e) {
        res.status(500).json({ "status":false,message: e.message });
    }
});
userRouter.post("/api/add-to-cart", async (req, res) => {
    try {
      const { id } = req.body;
      const product = await Product.findById(id);
      let user = await model.findById(req.user);
  
      if (user.cart.length == 0) {
        user.cart.push({ product, quantity: 1 });
      } else {
        let isProductFound = false;
        for (let i = 0; i < user.cart.length; i++) {
          if (user.cart[i].product._id.equals(product._id)) {
            isProductFound = true;
          }
        }
   
        if (isProductFound) {
          let producttt = user.cart.find((productt) =>
            productt.product._id.equals(product._id)
          );
          producttt.quantity += 1;
        } else {
          user.cart.push({ product, quantity: 1 });
        }
      }
      user = await user.save();
      res.status(200).json({user,"status":true,message:"Added successfully"});
    } catch (e) {
      res.status(500).json({ message: e.message,"status":false,});
    }
  });
module.exports = userRouter;
