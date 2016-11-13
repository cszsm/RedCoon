var requireOption = require('../common').requireOption;

/**
 * Creates or updates a user
 */
module.exports = function (objectRepository) {

	var userModel = requireOption(objectRepository, 'userModel');

    return function (req, res, next) {

    	if (typeof req.body === 'undefined') {
    		console.log('ezitt rossz');
    		return next();
    	}

    	if (typeof req.body.name === 'undefined') {
    		return next();
    	}

    	var user = undefined;
    	if (typeof res.tpl.user !== 'undefined') {
    		user = res.tpl.user;
    	} else {
    		user = new userModel();
    	}

    	user.name = req.body.name;

    	user.save(function(err, result) {
    		if (err) {
    			return next(err);
    		}

    		return res.redirect('/users');
    	});
    };
};