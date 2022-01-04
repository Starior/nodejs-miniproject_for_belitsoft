const express = require('express');

const { getDb } = require('../utils/database');

const router = express.Router();

router.get('/', (req, res) => {
  const posts = getDb();
  posts
    .collection('posts')
    // .aggregate([{
    //   $lookup: {
    //     from: 'tags',
    //     localField: 'categories',
    //     foreignField: '_id',
    //     as: 'room_details',
    //   },
    // }, ])
    .find()
    .toArray()
    .then((posts) => {
      // res.json(posts)
      // posts.forEach(element => {
      //   // element.categories
      //   console.log("posts" + element.categories)

      // });
      // console.log(posts[0])
      res.render('home', {

        // pageTitle: 'Homepage',
        // message: 'Some message text',
        posts

      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
    // res.render('home', {

  //   // pageTitle: 'Homepage',
  //   // message: 'Some message text',
  //   posts

  // });
})

router.post('/posts', (req, res) => {
  const db = getDb();
  db
    .collection('posts')
    .insertOne(req.body)
    .then((data) => {
      console.log(data)
      res.json({ message: 'The post was created' })
    })
    .catch((error) => {
      // new Error('Some message')
      res.status(400).json({ error: error.message })
    })
})

module.exports = router