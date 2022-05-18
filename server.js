const express = require('express')
const connectDb = require('./config/db')
const app = express()
const port = process.env.PORT || 3000;

// Connect database
connectDb()

app.get('/', (req, res) => {
    res.send('API running')
})

app.listen(port, () => {
    console.log(`app running on ${port}`);
})