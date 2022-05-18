const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDb = async () => {
    try {
        await mongoose.connect(db)

        console.log('mongoDb Connected....');
    } catch (err) {
        console.error(err.message);
        // EXIT process with a failure
        process.exit(1)
    }
}

module.exports = connectDb