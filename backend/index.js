const express = require('express');
const app = express();
require('dotenv').config();
require('./conn/conn')

app.use('/',(req,res)=>{
    res.send("hello backend")
})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log('Server on',PORT)
})