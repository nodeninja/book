"use strict";

/**
 * Post management library
 */

var Post = require('../models/Post');

exports.addPost = addPost;
exports.getPostByAuthor = getPostByAuthor;
exports.getPostById = getPostById;
exports.updatePost = updatePost;

function addPost(post, callback) {

    var instance = new Post();
    instance.title = post.title;
    instance.text = post.text;
    instance.author = post.author;
    instance.tags = post.tags.split(" ");

console.log(instance);
    instance.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, instance);
        }

    });

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

function updatePost(post, callback) {

    getPostById(post._id, function(err, myPost) {

        if (err) {
            callback(err);
        }
        else {
            if (null === myPost) callback(null);
            myPost.title = post.title;
            myPost.text = post.text;
            myPost.tags = post.tags.split(" "); 
            myPost.save(function(err) {
                callback(err, myPost);
            });
        }
 
        
    });

}