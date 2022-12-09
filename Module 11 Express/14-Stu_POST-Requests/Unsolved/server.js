const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.json(`${req.method} request recieved to get reviews`);
  console.log(`${req.method} request recieved to get reviews`);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app,post('/api/reviews', (req, res) => {
  res.json(`${req.method} request recieved to add review`);
  console.log(`${req.method} request recieved to add review`);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} request recieved to retrieve upvote count`);
  console.log(`${req.method} request recieved to retrieve upvote count`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  res.json(`${req.method} requesto recieved to upvote`);
  console.log(`${req.method} request recieved to upvote`);
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
