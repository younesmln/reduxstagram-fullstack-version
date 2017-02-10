const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  code: {type: String, index: {unique: true}},
  caption: String,
  likes: String,
  id: String,
  display_src: String
});

const Post = mongoose.model('Post', PostSchema);
