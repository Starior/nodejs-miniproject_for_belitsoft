const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs');

const allRoutes = require('./routes/all')
const postsRoutes = require('./routes/posts')
const categoriesRoutes = require('./routes/categories')
const authorsRoutes = require('./routes/authors')
const tagsRoutes = require('./routes/tags')

const logger = require('./middlewares/logger')

const app = express()

app.use(bodyParser.json())

app.use(logger.writeLog)

app.use(allRoutes) // check id entry

app.use(postsRoutes)
app.use(categoriesRoutes)
app.use(authorsRoutes)
app.use(tagsRoutes)

app.get('/', (req, res) => {
  res.send('Homepage')
})

app.get('/logs', (req, res) => {
  fs.readFile('./logs.json', function(error, data) {
    if (error) throw error;
    res.send(data);
  });
})

app.use(function(req, res, next) {
  if (!req.route)
    res.send('That route not exist');
  // next();
});

const url = 'mongodb+srv://Starion:12345qwert@cluster0.pxpmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('It is connected')
  app.listen(3000, () => {
    console.log('It is running')
  })
})