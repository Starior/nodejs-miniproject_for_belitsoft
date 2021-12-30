const mongoose = require('mongoose');

const Schema = mongoose.Schema

const schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  description: String,
  // relation one to many
  categories: {
    type: [mongoose.Types.ObjectId],
    ref: 'Category',
  },
  // relation one to one
  // authorId: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Author',
  // }
})

module.exports = mongoose.model('Post', schema)