const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { saveFiles, getAllFiles, getAllImages, getAllVideos, getAllAudio } = require('../controllers/fileUploadController');

// @route shwoing files
// @desc showing files saved in the database
router.get('/', getAllFiles);
   
// @route saving files
// @desc getting all files and posting to database route
router.post('/upload', upload.single('files'), saveFiles);

// @route get images
// @desc getting all images and omitting other type of files
router.get('/images', getAllImages);

// @route get videos
// @desc getting all video and omitting other type of files
router.get('/video', getAllVideos);

// @route get audio
// @desc getting all audio and omitting other type of files
router.get('/audio', getAllAudio);

module.exports = router;