'user strict';

/**
 * Data seeding
 * @author Don Nguyen
 */

var _ = require('underscore');
var db = require('../lib/db');
var user = require("../lib/user");
var counter = 0;
var users = [{username: "housefix", email: "housefix@housefix.com", password: "housefix", access: "superuser"},
            {username: "servicemagic", email: "servicemagic@servicemagic.com", password: "servicemagic", access: "normaluser"}];

_.each(users, function(myUser) {user.addUser(myUser, done);});

function done() {
    counter++;
    if (users.length == counter) db.disconnect();
}