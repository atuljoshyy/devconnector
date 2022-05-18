const express = require('express')
const connectDb = require('./config/db')
const app = express()
const port = process.env.PORT || 3000;

// Connect database
connectDb()

app.get('/', (req, res) => {
    res.send('API running')
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/auth', require('./routes/api/auth'))

app.listen(port, () => {
    console.log(`app running on ${port}`);
})