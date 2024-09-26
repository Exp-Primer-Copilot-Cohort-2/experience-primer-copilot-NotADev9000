// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const comments = JSON.parse(fs.readFileSync('./comments.json'));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments, null, 2));
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});