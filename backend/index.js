const express = require('express');
const app = express();
require('dotenv').config();
require('./conn/conn')
const cors= require('cors');
const UserApi = require('./Routes/UserRoutes')
const TaskApi = require('./Routes/TaskRoutes')

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// app.use('/',(req,res)=>{
//     res.send("hello backend")
// })

app.use('/user', UserApi);
app.use('/task',TaskApi)

const PORT = 4000;

app.listen(PORT,()=>{
    console.log('Server on',PORT)
})