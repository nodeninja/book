'use strict';

/**
 * Connect to persistence layer
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.disconnect = disconnect;
module.exports.mongoose = mongoose;
module.exports.setLocal = setLocal;
module.exports.Schema = Schema;

// Connect to cloud database
var local = false;
var username = "yabe"
var password = "yXb49273Z";
connect();

// Connect to mongo
function connect() {
    if (local) mongoose.connect('mongodb://localhost/spoutlets');
    else mongoose.connect('mongodb://' + username + ':' + password + '@ds033037.mongolab.com:33037/yabe');
    
}
//function connect() {}
function disconnect() {mongoose.disconnect()}

function setLocal(doLocal) {
    local = doLocal;
}