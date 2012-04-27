'use strict';

var post = require("../lib/post");
/*
 * GET home page.
 */


exports.admin = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else    
        res.render('admin', { title: 'YABE' }) 
};

exports.create = function(req, res){
  res.render('create', { title: 'YABE' })
};


exports.editPost = function(req, res){
  post.getPostById(req.params.postId, function(err, post) {
      console.log(post);
      res.render('newPost', { title: 'YABE', post: post});
  });
  
};


exports.index = function(req, res){
  res.render('index', { title: 'YABE' })
};

exports.login = function(req, res){
  res.render('login', {layout: false, title: 'YABE' })
};

exports.newPost = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else    
        res.render('newPost', { title: 'YABE' })   
 
};

exports.read = function(req, res){
  res.render('post', { title: 'YABE' })
};

// Posts
exports.postNewPost = function(req, res){
    var postId = req.body.postId;
    var title = req.body.title;
    var text = req.body.text;
    var tags = req.body.tags;
    console.log(title, text, tags);
    if (undefined != postId) {
        post.updatePost({_id: postId, title: title, text: text, author: req.user['_id'], tags: tags}, function(err, post) {
            res.redirect('/admin/posts/index');
        });        
    }
    else {
        post.addPost({title: title, text: text, author: req.user['_id'], tags: tags}, function(err, post) {
            res.redirect('/admin/posts/index');
        });
    }


};
