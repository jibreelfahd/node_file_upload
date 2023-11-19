const FileSchema = require('../models/fileUpload');
const { createReadStream } = require('fs');

// @route recieve files
// @desc uploading files and saving to the database
exports.saveFiles = async (req, res) => {
   try {
      const files = await FileSchema.create({
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
   });
   res.redirect('/');
   } 
   catch (error) {
   res.status(500).json({ success: false, error: error.message });
   }
}

// @route getting files
// @desc getting all files saved in the database 
exports.getAllFiles = async(req, res) => {
   try {
   const files = await FileSchema.find();
   if (!files || files.length === 0) {
      return res.render('index', { message: 'No files exists at the moment', allFiles: files});
   }
   files.map(file => {
      if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
         file.isImage = true
      }

      if(file.mimetype === 'audio/mpeg') {
         file.isAudio = true
      }

      if(file.mimetype === 'video/mp4'){
         file.isVideo = true
      }
   })
   res.render('index', { sucess: true, allFiles: files})
  } catch (error) {
      console.log(error.message);
  }
}

// @route getting images
// @desc getting all imagess saved in the database
exports.getAllImages = async (req, res) => {
   try {
      const images = await FileSchema.find();
      if (!images || images.length === 0) {
         return res.render('images', { message: 'No image exists at the moment', images: images});
      }

      images.map(image => {
         if(image.mimetype === 'image/png' || image.mimetype === 'image/jpeg'){
            image.isImage = true
         }
      });

      res.render('images', { sucess: true, images: images});
   } catch (error) {
      console.log(error.message);
   }
}

// @route getting video content
// @desc getting all vidoes saved in the database
exports.getAllVideos= async (req, res) => {
   try {
      const video = await FileSchema.find();
      if (!video || video.length === 0) {
         return res.render('videos', { message: 'No image exists at the moment', video: video});
      }

      video.map(videoFile => {
         if(videoFile.mimetype === 'video/mp4'){
            videoFile.isVideo = true
         }
      });

      res.render('videos', { sucess: true, video: video});
   } catch (error) {
      console.log(error.message);
   }
}

// @route getting audio content
// @desc getting all audio saved in the database
exports.getAllAudio = async (req, res) => {
   try {
      const audio = await FileSchema.find();
      if (!audio || audio.length === 0) {
         return res.render('audio', { message: 'No image exists at the moment', audio: audio});
      }

      audio.map(audioFiles => {
         if(audioFiles.mimetype === 'audio/mpeg'){
            audioFiles.isAudio = true
         }
      });

      res.render('audio', { sucess: true, audio: audio});
   } catch (error) {
      console.log(error.message);
   }
}