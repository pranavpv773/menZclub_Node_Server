const nodemailer = require("nodemailer")
const path = require("path")
const hbs = require("nodemailer-express-handlebars")
require('dotenv').config({ path: '/.env' })


module.exports = {
    sendOtpEmail: async (email, name) => new Promise(async (resolve, reject) => {
        const otpCode = Math.floor(1000 + Math.random() * 9000)
        const transporter = nodemailer.createTransport({

            service: "hotmail",

            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            }

        });


        const handlebarOptions = {
            viewEngine: {
                extName: ".handlebars",
                partialsDir: path.resolve("./view"),
                defaultLayout: false
            },
            viewPath: path.resolve("./view"),
            extName: ".handlebars"
        }

        transporter.use("compile", hbs(handlebarOptions))


        // send mail with defined transport object
        const clindOtpCode = {
            from: process.env.NODEMAILER_USER, // sender address
            to: email, // list of receivers
            subject: 'Menzclub Email Varification',
            template: "email",
            context: {
                otp: otpCode
            }
        }
        transporter.sendMail(clindOtpCode, (error, info) => {
            if (error) reject(error)
            resolve(otpCode)
        })
    })

}