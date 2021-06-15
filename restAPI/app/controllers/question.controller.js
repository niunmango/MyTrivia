const Question = require('../models/question.model.js');


// POST a Question
exports.create = (req, res) => {
    // Create a Question
    const question = new Question(req.body);

    // Save a Question in the MongoDB
    question.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// FETCH all Questions
exports.findAll = (req, res) => {
    Question.find()
    .then(questions => {
        res.json(questions);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// FIND a Question
exports.findOne = (req, res) => {
    Question.findById(req.params.questionId)
    .then(Question => {
        if(!Question) {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });            
        }
        res.json(Question);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving Question with id " + req.params.questionId
        });
    });
};

// Random Question
exports.findRandom = (req, res) => {
    Question.find()
    .then(questions => {
        if(!questions) {
            return res.status(404).json({
                msg: "No questions yet"
            });            
        }
        res.json(questions[Math.floor(Math.random() * questions.length)]);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "No questions yet"
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving random question"
        });
    });
};

// UPDATE a Question
exports.update = (req, res) => {
    // Find Question and update it
    Question.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(Question => {
        if(!Question) {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });
        }
        res.json(Question);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });                
        }
        return res.status(500).json({
            msg: "Error updating Question with id " + req.params.questionId
        });
    });
};

// DELETE a Question
exports.delete = (req, res) => {
    Question.findByIdAndRemove(req.params.questionId)
    .then(Question => {
        if(!Question) {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });
        }
        res.json({msg: "Question deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Question not found with id " + req.params.questionId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete Question with id " + req.params.questionId
        });
    });
};