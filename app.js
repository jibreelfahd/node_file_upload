const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fileUploadRouter = require('./routes/fileUploadRouter')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// @connecting to database
const dbURI = 'mongodb://127.0.0.1:27017/nod-tutorial';

const mongoConnect = async (url) => {
   try {
   await mongoose.connect(url);
   app.listen(3000, () => console.log('Server is up and running'));
   } catch (error) {
      console.log(error);
   }
}
mongoConnect(dbURI);

// @setting the file upload file and redering the ejs file
app.use(fileUploadRouter);