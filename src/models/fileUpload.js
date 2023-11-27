const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
   filename: String,
   path: String,
   originalname: String,
   mimetype: String,
   size: Number
}, { timestamps: true });

const FileSchema = mongoose.model('file', fileUploadSchema);
module.exports = FileSchema;