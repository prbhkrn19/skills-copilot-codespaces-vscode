// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});