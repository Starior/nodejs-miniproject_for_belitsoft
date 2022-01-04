const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  excerpt: String,

  categories: { // relation one to many 
    type: [mongoose.Types.ObjectId],
    ref: 'Category',
    //required: true
  },
  tags: { // relation one to many 
    type: [mongoose.Types.ObjectId],
    ref: 'Tag',
    //required: true
  },
  author: { // relation one to one 
    type: mongoose.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})