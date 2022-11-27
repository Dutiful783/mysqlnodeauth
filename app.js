require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./api/users/user.router');

//middleware
app.use(express.json())
app.use('/api/users', userRoute);

//server 
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running:', process.env.APP_PORT);
})