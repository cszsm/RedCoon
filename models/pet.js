var schema = require('mongoose').Schema;
var db = require('../config/db');

var Pet = db.model('Pet', {
	name: String,
	species: String,
	_owner: {
		type: schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = Pet;