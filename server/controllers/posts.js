const postModel = require('../models/post');


const find = (req, res) => {
  postModel
    .find()
    .populate('categories')
    .then((posts) => {
      res.json(posts)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const findOne = (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // it's an ObjectID   
    postModel
      .findById(id)
      .populate('categories')
      .then((post) => {
        if (post != null)
          res.status(200).json(post);
        else
          res.status(400).json("Post with this id does not exist");
      })
      .catch((error) => {
        res.status(400).json({ error: error.message })
      })
  } else {
    // nope    
    res.status(400).json("Invalid id entry (it's not an ObjectID)")

  }



  // res.status(200).json(post);
}
module.exports = { find, findOne }