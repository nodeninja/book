'use strict';

/**
 * Test suite for Post module.
 * This should only be run against a test database, NEVER production
 * @author Don Nguyen
 */

var post = require("../lib/post");
var assert = require("assert");
var should = require('should');
var _ = require('underscore');

suite('post', function() {

    test('addComment should add comment', function(done) {

        var postId = '4f9d1070fef5ea7117000019';
        //console.log('testing');
        post.addComment(postId, {author: 'blah3', content: 'comment'}, function(err) {
            done();
        });
                
        

    });

    test('getPostByTag should retrieve by tag', function(done) {

        var tag = 'Node.js';
        post.getPostByTag(tag, function(err, posts) {
            posts.length.should.be.above(0);
            _.forEach(posts, function(post) {
                should.not.exist(err);
                
              //  console.log(post);
                
            });
            done();
        });

    });
    

    test('removeTag should retrieve by tag', function(done) {

        var id = '4f9db8572835a8451d000349';
        var tag = 'IBC';
        post.removeTag(id, tag, function(err) {
            should.not.exist(err);
            done();
        });
    });   


    test('rename tag', function(done) {

        post.renameTag('4f9d1070fef5ea7117000019', 'blah', "New", function(err) {
            should.not.exist(err);
            console.log("renameb");
            done();
        });       
        

    }); 



});