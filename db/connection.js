const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const conn= await mongoose.connect("mongodb+srv://pranavpv:3235052m@cluster0.8fes20o.mongodb.net/mezclub")

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error){
        console.log(`MongoDB Not connected ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB;