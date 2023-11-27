const express = require('express');
const app = express();
const mongoConnect = require('./src/db/index');
const fileUploadRouter = require('./src/routes/fileUploadRouter')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const dbURI = 'mongodb://127.0.0.1:27017/nod-tutorial';
const start = async () => {
   try {
      await mongoConnect(dbURI);
      app.listen(3000, () => console.log('Server is up and running'));
   } catch (error) {
      console.log(error);
   }
}

start();
// @setting the file upload file and redering the ejs file
app.use(fileUploadRouter);