/**
 * User model
 * @author Don Nguyen
 */

var db = require('../lib/db');

var Schema = new db.Schema({
    username    : String
    , email     : String
    , password: String
    , access: String
});

// Exports
module.exports = db.mongoose.model('User', Schema);