const express = require('express');
const mongoose = require('mongoose');
const { connectToDb } = require('./connection.js');
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/posts.js');
const profileRouter = require('./routes/profile.js');
const { checkAuth, restrictToLoggedinUserOnly } = require('./middlewares/auth.js');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


const fs = require('fs');
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}
const dpUploadPath = path.join(__dirname, 'dps');
if (!fs.existsSync(dpUploadPath)) {
    fs.mkdirSync(dpUploadPath, { recursive: true });
}

//cors
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // This is important.
  };
app.use(cors(corsOptions));
const PORT = process.env.PORT||5000;

//connecting to db
//'mongodb://127.0.0.1:27017/legally-right'
connectToDb(process.env.MONGO_URL).then(()=> console.log("MongoDb Set"));

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

//server uploads 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/dps', express.static(path.join(__dirname, 'dps')));
//routes

app.use('/',userRouter);
app.use('/home',restrictToLoggedinUserOnly,postRouter);
app.use('/users',restrictToLoggedinUserOnly,profileRouter);


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})