const express = require('express');
const { handleCreatePost, handleGetPosts } = require('../controllers/post');

const router = express.Router();

router.post('/',handleCreatePost);
router.get('/',handleGetPosts);

module.exports = router;