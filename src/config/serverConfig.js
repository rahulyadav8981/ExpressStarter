const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000, // Default to 3000 if PORT is not set in .env
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase', // Default MongoDB URL
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret', // Default JWT secret
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h', // Default JWT expiration time
    NODE_ENV: process.env.NODE_ENV || 'development' // Default environment
}