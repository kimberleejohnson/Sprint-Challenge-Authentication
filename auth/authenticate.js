// Requiring jsonwebtoken
const jwt = require('jsonwebtoken');

// Defining my secret 
// Changing to ../secrets/secrets.js file instead of env, because that's how we've done it in class the past two days
const secrets = require('../secrets/secrets'); 

// Exporting middleware functions that verify a user and also generate a token 
module.exports = {
  authenticate,
  generateToken
};

// Function that generatesToken for user 
function generateToken(user) {
  // Defining payload, containing claims (info) for token 
  const payload = {
    subject: user.id, 
    username: user.username, 
    department: user.department
  };

  const options = {
    expiresIn: '1d'
  }

  // Grabs the jwtSecret to verify token 
  return jwt.sign(payload, secrets.jwtSecret, options)
}

// Authentication function, that verifies a user's data 
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    // Changing jwtKey to jwtSecret to match our project in class
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}