var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "useradmin"
var password = "cd49Z4b8";
var address = '@ds031867.mongolab.com:31867/user';
connect();

// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}