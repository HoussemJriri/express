const express = require('express');
const app = express();
var port = 3000;

const {router:homeRouter } = require('./routes/home')
const {router:contactRouter } = require('./routes/contact')
const {router:servicesRouter } = require('./routes/services')



app.use('/home',homeRouter)
app.use('/contact',contactRouter)
app.use('/services',servicesRouter)


app.listen('3000', (err) => {
    if (err) console.log('Server is not running ! ')
    else console.log('Server is running on port : 3000');
});
