import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
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

export const Transaction = mongoose.model('Transaction', transactionSchema)