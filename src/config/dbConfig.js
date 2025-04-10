const mongoose = require('mongoose');
const serverConfig = require('./serverConfig.js');


async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:');
        console.log(error);
    }
}

module.exports = connectDB;