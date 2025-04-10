const express = require('express');

const serverConfig = require('./config/serverConfig.js');
const connectDB = require('./config/dbConfig');

const app = express();

app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server is running  on http://localhost:${serverConfig.PORT}`);
     
});