const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected..');
  } catch (e) {
    console.error(e.message); // to console error message
    process.exit(1); // to escape from the process of failure
  }
};

module.exports = connectDB;
