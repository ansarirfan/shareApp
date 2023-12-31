const express = require("express");
const app = express();
const path = require('path');
const cors = require('corse')


const PORT = process.env.PORT || 3000;

const connectDB = require("./config/db");


connectDB();

//cors
const corsOption = {
    origin:  process.env.ALLOWED_CLIENTS.split(',')
}

app.use(corsOption());

//TEMPLATE ENGINE
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')

//for static middleware
app.use(express.static('public'));
app.use(express.json());

//routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));



app.listen(PORT, ()=>{
    console.log(`Listening on the ${PORT}`);
})