const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/menZclub', { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
    console.log('connection error', e.message)
})

const db = mongoose.connection

module.exports = db