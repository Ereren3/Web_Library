const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        unique: true,
        required: true,
        type: String,
    },
    author: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    quantitiy: {
        type: Number,
        required: true,
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;