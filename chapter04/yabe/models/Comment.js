/**
 * Comment model
 * @author Don Nguyen
 */

var db = require('../lib/db');

var Schema = new db.Schema({
    author    : String
    , content    : String
});

// Exports
module.exports = db.mongoose.model('Comment', Schema);