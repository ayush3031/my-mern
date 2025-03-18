const express = require('express');
const { handleCreatePost, handleGetPosts, handleGetComments, handleAddNewComment, handleIsLiked, handleAddRemoveLike, handleGetUser } = require('../controllers/post');
const multer = require('multer');
const { handleSendUserDetails } = require('../controllers/profile');


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
router.get('/posts/likes/:id',handleIsLiked);
router.get('/posts/addlikes/:id',handleAddRemoveLike);
router.get('/posts/removelikes/:id',handleAddRemoveLike);
router.get('/posts/getuser/:id',handleGetUser);
router.get('/getuser',handleSendUserDetails);

module.exports = router;