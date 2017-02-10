var mongoose = require('mongoose');
const wrap = require('co-express');
const express = require('express');

const Post = mongoose.model('Post');

const router = express.Router();

router.get('/', wrap(function *(req, res){
  console.log("hello from index posts");
  const posts = yield Post.find({});
  res.json(posts);
}));

module.exports = router;