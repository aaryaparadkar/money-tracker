const mongoose = require('mongoose')
const {Schema, model} = mongoose

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    }
}, {timestamps: true})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction