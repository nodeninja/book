"use strict";

/**
 * Post management library
 */

var Post = require('../models/Post');
var tag = require('./tag');
var _ = require('underscore');

exports.addComment = addComment;
exports.addPost = addPost;
exports.getNextPost = getNextPost;
exports.getPostByAuthor = getPostByAuthor;
exports.getPostById = getPostById;
exports.getPostByTag = getPostByTag;
exports.getPosts = getPosts;
exports.getPreviousPost = getPreviousPost;
exports.removeTag = removeTag;
exports.renameTag = renameTag;
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

function getPostByTag(tag, callback) {
    Post.find({ tags : tag }, function(err, posts) {
        callback(err, posts);
    });
}

function getPosts(callback) {
    Post.find().desc('_id').run(callback);
}

function getPreviousPost(id, callback) {
    Post.find().where('_id').$lt(id).desc('_id').limit(1).run(callback);
}

function removeTag(id, tagName, callback) {
    Post.findById(id, function(err, post) {
       
        for (var i=0; i<post.tags.length; i++) {
            if (post.tags[i] == tagName) {
                post.tags = _.filter(post.tags, function(tag) {return tag != tagName;});              
            }
        }
        post.save(callback);
    });
}

function renameTag(id, oldTag, newTag, callback) {
    
    function map(tag) { if (tag == oldTag) return newTag; else return tag;}
    Post.findById(id, function(err, post) {
       
        for (var i=0; i<post.tags.length; i++) {
            if (post.tags[i] == oldTag) {                
                post.tags = _.map(post.tags, map);   
            }
        }
        console.log(post.tags);
        post.save(callback);
    });
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