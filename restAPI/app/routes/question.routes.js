module.exports = function(app) {
 
    const questions = require('../controllers/question.controller.js');
 
    // Create a new Question
    app.post('/api/questions', questions.create);
 
    // Retrieve all Question
    app.get('/api/questions', questions.findAll);
 
    // Retrieve a single Question by Id
    app.get('/api/questions/:questionId', questions.findOne);
 
    // Retrieve a random Question
    app.get('/api/questionsrandom', questions.findRandom);

    // Update a Question with Id
    app.put('/api/questions', questions.update);
 
    // Delete a Question with Id
    app.delete('/api/questions/:questionId', questions.delete);
}