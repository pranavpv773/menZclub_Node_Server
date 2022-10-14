const db = require("./db/connection")
const express = require("express")
const app = express()
require("dotenv").config()
const accountRoutes = require("./routes/accountRoutes")
const adminRouter = require("./routes/adminRoutes")
const shirtRouter = require("./routes/shirtRoutes")
const tShirtRouter = require("./routes/tShirtRoutes")
const jeansRouter=require("./routes/jeansRouter")
const shoesRouter =require("./routes/shoesRoutes")
const watchRouter =require("./routes/watchRoutes")
const userRouter = require("./routes/userRoutes")
const bannerRouter = require("./routes/bannerRoutes")
// db connect

db()
// local host

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server starting ${port}`))


//json converter

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// call 



app.use("/account", accountRoutes)
app.use(adminRouter)
app.use(shirtRouter)
app.use(tShirtRouter)
app.use(jeansRouter)
app.use(shoesRouter)
app.use(watchRouter)
app.use(userRouter)
app.use(bannerRouter)