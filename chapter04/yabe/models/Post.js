/**
 * Post model
 * @author Don Nguyen
 */

var db = require('../lib/db');
var Comment = new db.Schema({
    author    : String
    , content    : String
});

var Schema = new db.Schema({
    title    : String
    , text    : String
    
    // Denormalize by using user name
    , author     : String
    , tags: [String]
    , comments: [Comment]
});

// Exports
module.exports = db.mongoose.model('Post', Schema);