const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    isBn:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    publishedDate:{
        type: Date,
    },
    publisher:{
        type: String,
    },
    updatedDate:{
        type: Date,
        default: Date.now
    }
});


module.exports = Book = mongoose.model('book', BookSchema);
