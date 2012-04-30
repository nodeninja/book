"use strict";

/**
 * Tag management library
 */

var Tag = require('../models/Tag');
var _ = require('underscore');

exports.addTag = addTag;
exports.addTags = addTags;
exports.getTag = getTag;
exports.getTagById = getTagById;
exports.getTags = getTags;
exports.parseTags = parseTags;
exports.removeTag = removeTag;
exports.updateTag = updateTag;

// Add tag to database
function addTag(tagName, callback) {

    Tag.update({tagName: tagName}, {tagName: tagName}, {upsert: true}, callback);

}

// Add tag to database
function addTags(tags, callback) {

    var count = 0;
    _.forEach(tags, function(tag) {
        addTag(tag, function(err, myTag) {
            if (err) callback(err);
            count++;
            if (count == tags.length) {
                callback(null);
            }
        });

    });

}


// Retrieve tag, return null if non-existent
function getTag(tagName, callback) {
    Tag.findOne({'tagName': tagName}, function(err, doc) {
        if (err) {
            callback(err);
        }
        else {
            if (null === doc) callback(null, null);
            else callback(null, doc);
        }
    });
}

function getTagById(id, callback) {
    Tag.findById(id, function(err, doc) {
        if (err) {
            callback(err);
        }
        else {
            if (null === doc) callback(null, null);
            else callback(null, doc);
        }
    });
}

function getTags(callback) {
    Tag.find({}, function(err, tags) {
        if (err) {
            callback(err);
        }
        else {
            if (null === tags) callback(null, null);
            else callback(null, tags);
        }
    });
}

// Parse string return array of tags
function parseTags(tagString) {
    var tagArray = [];
    _.forEach(tagString.split(/[ ,]+/), function(tag) {
        tagArray.push(tag);
    });
    return tagArray;    
}

function removeTag(id, callback) {
    getTagById(id, function(err, tag) {
        if (tag) tag.remove();
        callback(err, tag);
    });
}

function updateTag(oldTag, newTag, callback) {
    getTag(oldTag, function(err, tag) {
        if (tag) tag.tagName = newTag;
        tag.save(callback);
        
    });
}