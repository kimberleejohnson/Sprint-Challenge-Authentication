require('dotenv').config(); // load .env variables

// Requiring my server
const server = require('./api/server.js');

// Telling my server to listen on port 3300
const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
