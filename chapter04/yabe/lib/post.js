"use strict";

/**
 * Post management library
 */

var Post = require('../models/Post');
var tag = require('./tag');

exports.addComment = addComment;
exports.addPost = addPost;
exports.getNextPost = getNextPost;
exports.getPostByAuthor = getPostByAuthor;
exports.getPostById = getPostById;
exports.getPosts = getPosts;
exports.getPreviousPost = getPreviousPost;
exports.updatePost = updatePost;



function addComment(id, comment, callback) {
    Post.update({_id: id}, {$push: {comments: comment}}, callback);
    /**
    Post.findById(id, function(err, post) {
        
       post.comments.push(comment);
        post.save(function(err) {
            console.log(post);
            callback(err);
        });
    });*/
    
   
}

function addPost(post, callback) {

    var instance = new Post();
    instance.title = post.title;
    instance.text = post.text;
    instance.author = post.author;
    instance.tags = tag.parseTags(post.tags);


    instance.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            tag.addTags(instance.tags, function(err) {
                if (err) {
                    callback(err);
                }
                else callback(null, instance);
            });
            
        }

    });

}

function getNextPost(id, callback) {
    Post.find().where('_id').gt(id).asc('_id').limit(1).run(callback);
}

// Retrieve post, return null if non-existent
function getPostByAuthor(id, callback) {
    Post.find({'author': id}, function(err, docs) {
        if (err) {
            callback(err);
        }
        else {
            if (null === docs) callback(null, null);
            else callback(null, docs);
        }
    });
}

// Retrieve pot, return null if non-existent
function getPostById(id, callback) {
    Post.findOne({'_id': id}, function(err, doc) {
        if (err) {
            callback(err);
        }
        else {
            if (null === doc) callback(null, null);
            else callback(null, doc);
        }
    });
}

function getPosts(callback) {
    Post.find().desc('_id').run(callback);
}

function getPreviousPost(id, callback) {
    Post.find().where('_id').$lt(id).desc('_id').limit(1).run(callback);
}

function updatePost(post, callback) {

    getPostById(post._id, function(err, myPost) {

        if (err) {
            callback(err);
        }
        else {
            if (null === myPost) callback(null);
            myPost.title = post.title;
            myPost.text = post.text;
            myPost.tags = tag.parseTags(post.tags);
            myPost.save(function(err) {
                tag.addTags(myPost.tags, function(err) {
                    if (err) {
                        callback(err);
                    }
                    else callback(err, myPost);
                });
                
            });
        }
 
        
    });

}