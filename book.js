const mongoose = require('mongoose');

module.exports = mongoose.model('Book', new mongoose.Schema({
    id: String,
    name: String,
    genre: String,
    status: String,
    sensorData: String
   }));
   
