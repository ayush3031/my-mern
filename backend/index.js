const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 5000;

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})