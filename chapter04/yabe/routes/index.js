'use strict';

var post = require("../lib/post");
var tag = require("../lib/tag");
var _ = require("underscore");

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

exports.allPosts = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else    
        res.render('all-posts', { title: 'YABE' }) 
};

exports.comments = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else    
        res.render('comments', { title: 'YABE' }) 
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


    var errors = [];
    console.log(postId);
    if (undefined === title || title.length === 0) errors.push("Please input title");
    if (undefined === text || text.length === 0) errors.push("Please input content");

    console.log(title, text, tags);
    if (errors.length > 0) {
        res.render('newPost', { title: 'YABE', errors: errors, post:{title: title, text: text}});
    }
    else if (undefined != postId) {
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


exports.tags = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else {
    	tag.getTags(function(err, tags) {
    		if (err) {
    			console.log('tag error');
    			throw err;
            }
			res.render('tags', { title: 'YABE', tags: tags});
    	});
    }  
        
};

exports.tagsAdd = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else {
        res.render('tagsAdd', { title: 'YABE'});
    }  
        
};

exports.users = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else {
        res.render('users', { title: 'YABE'}) ;
	}
};
