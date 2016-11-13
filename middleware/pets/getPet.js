var requireOption = require('../common').requireOption;

/**
 * Gets the pet for the petid parameter
 */
module.exports = function (objectRepository) {

	var petModel = requireOption(objectRepository, 'petModel');

    return function (req, res, next) {

    	petModel.findOne({
    		_id: req.param('petid')
    	}, function (err, result) {
    		if (err) {
    			return res.redirect('/pets');
    		}

    		res.tpl.pet = result;
    		return next();
    	});
    };
};