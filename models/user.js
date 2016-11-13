var schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
	name: String
});

module.exports = User;