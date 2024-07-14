const express = require('express');
const mongoose = require('mongoose');
const { connectToDb } = require('./connection');


const app = express();

const PORT = 5000;

//connecting to db

connectToDb('mongodb://127.0.0.1:27017/legally-right').then(()=> console.log("MongoDb Set"));

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})