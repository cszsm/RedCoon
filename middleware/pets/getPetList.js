var requireOption = require('../common').requireOption;

/**
 * Gets the pet list
 */
module.exports = function (objectRepository) {

	var petModel = requireOption(objectRepository, 'petModel');

    return function (req, res, next) {

    	petModel.find({

    	}, function (err, results) {
    		if (err) {
    			return next(err);
    		}

    		res.tpl.pets = results;
    		return next();
    	});
    };
};