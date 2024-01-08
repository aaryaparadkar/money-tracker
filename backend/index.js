const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction.models')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port)

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.post('/api/transaction', (req, res) => {
    mongoose.connect('')
    const {name, description, datetime} = res.body;
    res.json(req.body)
})