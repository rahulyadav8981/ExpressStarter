const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT , // Default to 3000 if PORT is not set in .env
    DB_URL: process.env.DB_URL  // Default MongoDB URL
   
}