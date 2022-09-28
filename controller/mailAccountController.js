const asyncHandler = require("express-async-handler")
const User = require("../model/signupModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const { sendOtpEmail } = require("../smshandler/nodemailer")
let otpGlobal


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


module.exports = {

    // signup

    signup: asyncHandler(async (req, res, next) => {

        try {

            const { user_mail, user_password, user_name, user_number } = req.body

            const match = await User.findOne({ user_mail: user_mail })

            if (match) {
                res.status(404).json({ "status": false, "message": "user already registerd" })

            } else {
                const user = User({
                    user_mail,
                    user_name,
                    user_number,
                    user_password,
                    user_isVerified: false,
                })

                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(user.user_password, salt)
                user.user_password = hashPassword

                // send a verification mail to user

                const response = await sendOtpEmail(user.user_mail, user.user_name)

                if (response != null) {
                    await user.save()
                    otpGlobal = response
                    console.log(otpGlobal);
                }

                if (response == null) {
                    res.status(401).json({ "status": false, "message": "server down" })
                } else {
                    res.status(200).json({ "status": true, "message": "otp sented", "id": user._id })
                }
            }

        } catch (error) {
            res.status(401).json({ "status": false, "error": error.message })

        }

    }),


    //verify otp

    verifyOtp: asyncHandler(async (req, res, next) => {
        const { user_otp, _id } = req.body
        console.log("user otp" + user_otp + "send otp" + otpGlobal);
        if (user_otp == otpGlobal) {
            console.log("user otp  " + user_otp + "   send otp  " + otpGlobal);
            const add = await User.findByIdAndUpdate({ _id: _id }, { $set: { user_isVerified: true } })
            res.status(200).json({ "status": true, "message": "login success", "jwt": createToken(_id) })

        } else {
            res.status(401).json({ "status": false, "message": "please check otp" })
        }

    }),


    //login

    login: asyncHandler(async (req, res, next) => {


        try {

            const { user_mail, user_password } = req.body

            console.log(user_mail, user_password);

            const findUser = await User.findOne({ user_mail: user_mail })

            if (findUser) {

                const match = await bcrypt.compare(user_password, findUser.user_password)

                if (match) {

                    const token = createToken(findUser.id)

                    res.status(200).json({ "status": true, "message": "Logged in succsessfully", "token": token })
                } else {
                    res.status(404).json({ "status": false, "message": "Password dosen't match"})
                }

            } else {
                res.status(404).json({ "status": false, "message": "User not registerd"})
            }

        } catch (error) {

            res.status(401).json({ "status": false, "error": error.message, "message": "ClientError" })

        }

    })

}