/**
 * Post model
 * @author Don Nguyen
 */

var db = require('../lib/db');

var Schema = new db.Schema({
    title    : String
    , text    : String
    , author     : String
    , tags: String
});

// Exports
module.exports = db.mongoose.model('Post', Schema);