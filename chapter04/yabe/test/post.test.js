'use strict';

/**
 * Test suite for Post module.
 * This should only be run against a test database, NEVER production
 * @author Don Nguyen
 */

var post = require("../lib/post");
var assert = require("assert");
var should = require('should');

suite('post', function() {

    test('addComment should add comment', function(done) {

        var postId = '4f9d1070fef5ea7117000019';
        console.log('testing');
        post.addComment(postId, {author: 'blah3', content: 'comment'}, function(err) {
          ////  console.log('***', num);
           // should.exist(num);
            done();
        });
                
        

    });



});