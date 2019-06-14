// Requiring axios to be able to talk to server
const axios = require('axios');

// Requiring authentication middleware 
const { authenticate } = require('../auth/authenticate');

// Defining routes
module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

// User registration function 
function register(req, res) {
  // implement user registration
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
