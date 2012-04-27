/**
 * Tag model
 * @author Don Nguyen
 */

var db = require('../lib/db');

var Schema = new db.Schema({
    tagName    : String
});

// Exports
module.exports = db.mongoose.model('Tag', Schema);