'use strict';

/**
 * Test suite for Tag module.
 * This should only be run against a test database, NEVER production
 * @author Don Nguyen
 */

var tag = require("../lib/tag");
var assert = require("assert");
var should = require('should');

suite('tag', function() {

    test('parseTag should parse tags', function(done) {

        var tagName = "my, tags are, in here";
        var tagArray = tag.parseTags(tagName);

        tagArray[0].should.eql("my");
        tagArray[1].should.eql("tags");
        tagArray[2].should.eql("are");
        tagArray[3].should.eql("in");
        tagArray[4].should.eql("here");
        
        tagName = "Don,Nguyen,on more";
        tagArray = tag.parseTags(tagName);
        tagArray[2].should.eql("on");
        tagArray[3].should.eql("more");
                console.log(tagArray);
        
        
        done();

    });



});