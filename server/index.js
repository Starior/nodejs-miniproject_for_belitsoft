const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('It is homepage')
});

app.listen(3000, () => {
  console.log('It is running')
})