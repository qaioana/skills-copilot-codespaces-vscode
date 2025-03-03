// create web server
// server.js

// require the express module
const express = require('express');
const app = express();

// require the comments.js module
const comments = require('./comments.js');

// create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});