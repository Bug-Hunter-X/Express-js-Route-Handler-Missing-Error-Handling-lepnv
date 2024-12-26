const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }
  // ... further logic to fetch user data ...
  res.send({ userId });
});
app.listen(3000, () => console.log('Server listening on port 3000'));