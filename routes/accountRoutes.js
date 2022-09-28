const express = require('express')
const router = express.Router()
const mailAccountController = require("../controller/mailAccountController")


router.post("/signup", mailAccountController.signup)

router.post("/login", mailAccountController.login)

router.post("/otp", mailAccountController.verifyOtp)


module.exports = router