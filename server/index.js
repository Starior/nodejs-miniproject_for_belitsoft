const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const postsRoutes = require('./routes/posts')
const categoriesRoutes = require('./routes/categories')

const app = express()

app.use(bodyParser.json())

app.use(postsRoutes)

app.use(categoriesRoutes)

app.get('/', (req, res) => {
  res.send('Homepage')
})

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