const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port)

app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.post('/api/transaction', (req, res) => {
    res.json(req.body)
})