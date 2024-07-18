const express = require('express');
const { handleCreatePost, handleGetPosts, handleGetComments, handleAddNewComment } = require('../controllers/post');
const multer = require('multer');


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage:storage });

router.post('/posts',upload.single('image'),handleCreatePost);
router.get('/posts',handleGetPosts);
router.get('/posts/:id',handleGetComments);
router.post('/posts/:id',handleAddNewComment);
router.get('/posts/likes/:id',);

module.exports = router;