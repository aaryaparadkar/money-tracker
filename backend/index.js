const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Transaction = require('./models/Transaction.models');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port)

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect('process.env.MONGO_URL')
    const {name, description, datetime, price} = req.body;
    const transaction = await Transaction.create({name, description, datetime, price})
    res.json(transaction)
})