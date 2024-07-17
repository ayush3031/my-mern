const express = require('express');
const { handleCreatePost, handleGetPosts } = require('../controllers/post');
const multer = require('multer');


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('hey');
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage:storage });

router.post('/posts',upload.single('image'),handleCreatePost);
router.get('/posts',handleGetPosts);

module.exports = router;