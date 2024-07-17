const express = require('express');
const mongoose = require('mongoose');
const { connectToDb } = require('./connection');
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/posts.js');
const { checkAuth, restrictToLoggedinUserOnly } = require('./middlewares/auth.js');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');



const fs = require('fs');
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

//cors
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // This is important.
  };
app.use(cors(corsOptions));
const PORT = 5000;

//connecting to db

connectToDb('mongodb://127.0.0.1:27017/legally-right').then(()=> console.log("MongoDb Set"));

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

//server uploads 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//routes

app.use('/',userRouter);
app.use('/home',restrictToLoggedinUserOnly,postRouter);


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})