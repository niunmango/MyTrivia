const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    Question: String,
    Answer1: String,
    Answer2: String,
    Answer3: String,
    Answer4: String,
});

module.exports = mongoose.model('Question', QuestionSchema);