const mongoose = require('mongoose');

// @connecting to database
const mongoConnect = async (url) => {
   try {
   await mongoose.connect(url);
   } catch (error) {
      console.log(error);
   }
}

module.exports = mongoConnect;