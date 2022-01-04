const express = require('express');
const { engine } = require('express-handlebars');
const { connect, disconnect } = require('./utils/database')

//const postsRoutes = require('./routes/posts');
const indexRoute = require('./routes/index')
const app = express();
app.use(indexRoute)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.get('/', (req, res) => {
//   // res.send('It is homepage')
//   res.render('home', {

//     // pageTitle: 'Homepage',
//     // message: 'Some message text',
//     // posts
//   });
// });

//app.use(postsRoutes);

connect((error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('It is connected')
  app.listen(3000, () => {
    console.log('It is running')
  })
})

// app.listen(3000, () => {
//   console.log('It is running')
// })