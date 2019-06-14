// Requiring dependencies 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Calling my routes and CRUD operations that go with them 
const configureRoutes = require('../config/routes.js');

// Defining my server 
const server = express();

// Using all my middleware 
server.use(helmet());
server.use(cors());
server.use(express.json());

// Wrapping my server in the Routes 
configureRoutes(server);

// Exporting my server 
module.exports = server;
