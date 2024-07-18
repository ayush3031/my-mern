const express = require('express');
const { handleSendUserDetails, handleUpdateProfilePicture, handleUpdateBio, handleFetchPosts } = require('../controllers/profile');

const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './dps');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage:storage });


router.get('/profile',handleSendUserDetails);
router.patch('/profile/changeDp',upload.single('image'),handleUpdateProfilePicture);
router.patch('/profile/bio',handleUpdateBio);
router.get('/profile/posts',handleFetchPosts);


module.exports = router;