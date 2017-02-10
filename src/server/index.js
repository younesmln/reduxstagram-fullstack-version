const router = require('express')();
const mongoose = require('mongoose');
require('./models/index');
const postRouter = require('./controllers/posts');

mongoose.connect('mongodb://localhost/reduxstagram', function(){
    console.log('connected to database!')
});

router.use('/posts', postRouter);

module.exports = router;

