const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
  title:  String,
  price: Number,
  author: String,
  language: String,
  toprated: Boolean
}, {
  collection: 'books',
  timestamps: true
})
module.exports = mongoose.model('Book', Book)