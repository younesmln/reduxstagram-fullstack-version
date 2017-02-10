const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: String,
  user: String,
  postCode: {type: String, ref: ' Post'}
});

const Comment = mongoose.model('Comment', CommentSchema);
