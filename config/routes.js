// Requiring axios to be able to talk to server
const axios = require('axios');

// Requiring my database
const db = require('../database/dbConfig'); 

// Requiring bcrypt, so my passwords can be hashed
const bcrypt = require('bcryptjs'); 

// Requiring authentication middleware 
// Requiring the generateToken function, part of my middleware
const { authenticate, generateToken } = require('../auth/authenticate');

// Defining routes
module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

// User registration function 
function register(req, res) {
  // setting variable for information passed in the form 
  let user = req.body; 

  // setting entered password to a hash
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash; 

  // Adding a user to the database
  db('users')
    .insert(user)
    .then((ids) => {
      res.status(201).json(ids); 
    })
    .catch((err) => res.status(400).json(err)); 
}

// User login function 
function login(req, res) {
  // implement user login
}

// Function that retrieves dad joke data 
function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
