'use strict';

var crypto = require('crypto');
var User = require('../models/User');

// Can improve down the line by making unique per user
var salt = "f#@Xu^%Hg*YBCs";

exports.addUser = addUser;
exports.authenticate = authenticate;
exports.getUserById = getUserById;

// Add user to database
function addUser(user, callback) {

    var encrypted = encrypt(user.password, salt);

    var instance = new User();
    instance.username = user.username;
    instance.email = user.email;
    instance.password = encrypted;
    instance.access = user.access;

    instance.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, instance);
        }

    });

}

// Authenticate
function authenticate(username, password, callback) {

    console.log('authenticating %s:%s', username, password);

    // query the db for the given username
    getUser(username, function(err, user) {
        if (err) callback(err);
        if (!user) return callback(new Error('cannot find user'));

        // apply the same algorithm to the POSTed password, applying
        // the hash against the pass / salt, if there is a match we
        // found the user
        if (user.password == encrypt(password, salt)) return callback(null, user);

        // Otherwise password is invalid
        callback(new Error('invalid password'));
    });

}

// Used to generate a hash of the plain-text password + salt
function encrypt(msg, key) {
    return crypto
        .createHmac('sha256', key)
        .update(msg)
        .digest('hex');
}

// Retrieve user, null for non-existent
function getUser(username, callback) {
    User.findOne({'username': username}, function(err, doc) {
        if (err) {
            callback(err);
        }
        else
            callback(null, doc);
    });
}

// Retrieve user, null for non-existent
function getUserById(id, callback) {
    User.findOne({'_id': id}, function(err, doc) {
        if (err) {
            callback(err);
        }
        else
            callback(null, doc);
    });
}