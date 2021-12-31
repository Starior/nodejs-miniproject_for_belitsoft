const mongoose = require('mongoose');

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  excerpt: String,

  categories: { // relation one to many 
    type: [mongoose.Types.ObjectId],
    ref: 'Category',
  },
  // relation one to one
  // authorId: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Author',
  // }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


module.exports = mongoose.model('Post', schema)