"use strict";

/**
 * Tag management library
 */

var Tag = require('../models/Tag');

exports.addTag = addTag;
exports.getTag = getTag;

// Add tag to database
function addTag(tagName, callback) {

    var instance = new Tag();
    instance.tagName = tagName;

    instance.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, instance);
        }

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