// create web server
const express = require('express');
const app = express();
const PORT = 3000;

// add middleware
app.use(express.json());

// create a comments array
const comments = [
  { id: 1, author: 'John', text: 'Hello' },
  { id: 2, author: 'Doe', text: 'Hi' },
  { id: 3, author: 'Jane', text: 'Hey' },
];

// create a get route to retrieve comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// create a post route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comments);
});

// create a put route to update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index] = comment;
  res.json(comments);
});

// create a delete route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments.splice(index, 1);
  res.json(comments);
});

// listen for the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});