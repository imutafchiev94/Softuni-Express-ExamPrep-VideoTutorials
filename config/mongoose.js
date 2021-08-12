const mongoose = require('mongoose');
const {DB_URI} = require('../config/config');

const dbOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}

mongoose.connect(DB_URI, dbOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected');
});

module.exports = db;