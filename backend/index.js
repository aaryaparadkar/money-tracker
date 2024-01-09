import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Transaction from './models/Transaction.models';
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