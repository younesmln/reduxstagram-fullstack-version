const posts = require('../data/posts');
const comments = require('../data/comments');
const mongoose = require('mongoose');
const co = require('co');

const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

co(function *() {
  yield [Post.remove(), Comment.remove()];
  const savedPosts = yield Post.insertMany(posts);
  var c = 0;
  const allComments = posts.map(p => {
    const postComment = comments[p.code];
    if (postComment){
      return postComment.map(comment => Object.assign({}, comment, {postCode: p.code}));
    } else return []
  }).reduce((arr, subArr) => arr.concat(subArr), []);
  const savedComments = Comment.insertMany(allComments);
  /*const postCount = yield Post.count();
  const commentCount = yield Comment.count();
  return [postCount, commentCount];*/
});
/*.then(rs => {
  console.log(JSON.stringify(rs));
});*/

