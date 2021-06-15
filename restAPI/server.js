const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const User = require('./app/models/user.model.js');
const Question = require('./app/models/question.model.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    

    User.remove({}, function(err) { 
       if(err){
          console.log(err);
          process.exit();
       }
       
       console.log('User collection removed');
       // -> initial new data
       initial();
    });

    Question.remove({}, function(err) { 

      if(err){
         console.log(err);
         process.exit();
      }
      
      console.log('Question collection removed');
      // -> initial new data
      initialQ();
   });

}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))

require('./app/routes/user.routes.js')(app);
require('./app/routes/question.routes.js')(app);

// Create a Server
const server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

function initial(){
 
    let users = [
      {
        firstname: "Nombre",
        lastname: "Apellido",
        email: "nombre@gmail.com"
      },
      {
        firstname: "Peter",
        lastname: "Pan",
        age: "peterpan@gmail.com"
      }
    ]
   

    // Init data -> save to MongoDB

    for (let i = 0; i < users.length; i++) { 
        const user = new User(users[i]);
        user.save();
    }

    console.log(">>> Done - Initial Data!");
}

function initialQ(){
 

  let questions = [
    {
      Question: "1+1",
      Answer1: "2",
      Answer2: "1",
      Answer3: "3",
      Answer4: "4",
    },
    {
      Question: "2+2",
      Answer1: "4",
      Answer2: "1",
      Answer3: "3",
      Answer4: "5",
    }
  ]
  // Init data -> save to MongoDB

  for (let i = 0; i < questions.length; i++) { 
    const question = new Question(questions[i]);
    question.save();
}

  console.log(">>> Done - Initial Data Questions!");
}