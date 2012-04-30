'use strict';

var Comment = require('../models/Comment');
var lib = require("../lib/yabelib");
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
        res.render('admin', { title: 'YABE' });
};

exports.allPosts = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else {    
        post.getPosts(function(err, posts) {
            if (err) handleError(err, req, res);
            res.render('all-posts', { title: 'YABE', posts: posts}); 
        });
        
    }
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

exports.delete_tag = function(req, res){
    if (undefined === req.user || req.user.access != 'superuser') {
        res.redirect('/');
    }
    else {
        var id = req.body.id;
        tag.removeTag(id, function(err, tag) {
            post.getPostByTag(req.body.tagName, function(err, posts) {
                var count = 0;
                _.forEach(posts, function(myPost) {
                    post.removeTag(myPost._id, req.body.tagName, function(err) {
                        count++;
                        if (count >= posts.length) res.redirect('/admin/tags');
                    })
                });
            });
            
        });
    }    
        
};

exports.editPost = function(req, res){
  post.getPostById(req.params.postId, function(err, post) {
      console.log(post);
      res.render('newPost', { title: 'YABE', post: post});
  });
  
};


exports.index = function(req, res, next){
    post.getPosts(function(err, posts) {
        if (err) next(err);
        _.forEach(posts, function(post) {
    		post.date = lib.getTimestamp(post._id).toDateString();
        });
    	res.render('index', { title: 'YABE', posts: posts});
    });
  
};

exports.login = function(req, res){
  res.render('login', {layout: false, title: 'YABE' })
};

exports.newPost = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else    
        res.render('newPost', { title: 'YABE' });  
 
};

exports.read = read;

function read(req, res, errors, name, message){
	var id = req.params.id;
	post.getPostById(id, function(err, myPost) {
		if (err) handleError(err, req, res);
		post.getNextPost(id, function(err, myNext) {
			var next;
			if (myNext.length > 0) next = myNext[0];
			if (err) handleError(err, req, res);
			console.log(err);
			console.log(next);
			post.getPreviousPost(id, function(err, myPrevious) {
				var previous;
				console.log('prev');
				console.log(myPrevious);
				if (myPrevious.length > 0) previous = myPrevious[0];
				if (err) handleError(err, req, res);
				res.render('read', { title: 'YABE', next: next, post: attachDate(myPost), previous: previous, errors: errors, name: name, message: message});
			});
			
		});
		
	});
  
}

exports.postComment = function(req, res){
	var postId = req.body.postId;
    var name = req.body.name;
    var message = req.body.message;

    var errors = [];
    if (undefined === name || name.length === 0) errors.push("Please input name");
    if (undefined === message || message.length === 0) errors.push("Please input message");


    if (errors.length > 0) {
        req.params.id = postId;
        read(req, res, errors, name, message);
        return;
    }
    
    var comment = new Comment();
    comment.author = name;
    comment.content = message;

    post.addComment(postId, {author: name, content: message}, function(err, numAffected) {
        res.redirect('/read/' + postId);
    });

};

// Post post submission
exports.postNewPost = function(req, res){
    var postId = req.body.postId;
    var title = req.body.title;
    var text = req.body.text;
    var tags = req.body.tags;


    var errors = [];
    if (undefined === title || title.length === 0) errors.push("Please input title");
    if (undefined === text || text.length === 0) errors.push("Please input content");

    console.log(title, text, tags);
    if (errors.length > 0) {
        res.render('newPost', { title: 'YABE', errors: errors, post:{title: title, text: text}});
    }
    else if (undefined != postId) {
        post.updatePost({_id: postId, title: title, text: text, author: req.user['username'], tags: tags}, function(err, post) {
            res.redirect('/admin/posts/index');
        });        
    }
    else {
        post.addPost({title: title, text: text, author: req.user['username'], tags: tags}, function(err, post) {
            res.redirect('/admin/posts/index');
        });
    }


};

exports.postsWithTags = function(req, res){
    var tag = req.params.tag;
    post.getPostByTag(tag, function(err, posts) {
        res.render('postsWithTags', { title: 'YABE', tag: tag, posts: posts}); 
    });
        
};

exports.search_tags = function(req, res) {
    if (undefined == req.user || req.user.access != 'superuser') {
        res.redirect('/');
    }
    else {
        tag.searchTags(req.body.searchString, function(err, tags) {
            if (err) {
                console.log('tag error');
                throw err;
            }
			res.render('tags', { title: 'YABE', tags: tags});
        });
    }      
}

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

exports.tags_edit = function(req, res){
    if (undefined === req.user) {
        res.redirect('/');
    }
    else {
        var id = req.params.id;
        tag.getTagById(id, function(err, tag) {
            res.render('tags_edit', { title: 'YABE', tag: tag});
        });
        
    }  
        
};


exports.update_tag = function(req, res){
    if (undefined === req.user || req.user.access != 'superuser') {
        res.redirect('/');
    }
    else {
        var myTag = req.body.tagName;
        var newTag = req.body.newTagName;
        tag.updateTag(myTag, newTag, function(err, doc) {
            post.getPostByTag(req.body.tagName, function(err, posts) {
                var count = 0;
                _.forEach(posts, function(myPost) {
                    post.renameTag(myPost._id, myTag, newTag, function(err) {
                        count++;
                        if (count >= posts.length) res.redirect('/admin/tags');
                    })
                });
            });            
            
        });
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

function attachDate(mongoObject) {
	mongoObject.date = lib.getTimestamp(mongoObject._id).toDateString();
	return mongoObject;
}
function handleError(err, req, res) {
    console.log('generic error handler called');
	res.render('error', {title: 'YABE', error: err});
}
