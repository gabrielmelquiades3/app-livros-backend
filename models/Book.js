const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    readAt: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);