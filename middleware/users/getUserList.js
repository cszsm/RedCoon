var requireOption = require('../common').requireOption;

/**
 * Gets the user list
 */
module.exports = function (objectRepository) {

	var userModel = requireOption(objectRepository, 'userModel');

    return function (req, res, next) {

    	userModel.find({

    	}, function (err, results) {
    		if (err) {
    			return next(err);
    		}

            res.tpl.users = results;
            return next();
    	});
    };
};