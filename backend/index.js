const express = require('express');
const mongoose = require('mongoose');
const { connectToDb } = require('./connection');
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/posts.js');
const { checkAuth } = require('./middlewares/auth.js');
const app = express();

const PORT = 5000;

//connecting to db

connectToDb('mongodb://127.0.0.1:27017/legally-right').then(()=> console.log("MongoDb Set"));

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes

app.use('/',userRouter);
app.use('/post',checkAuth,postRouter);


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})