var requireOption = require('../common').requireOption;

/**
 * Gets the user for the userid parameter
 */
module.exports = function (objectRepository) {

	var userModel = requireOption(objectRepository, 'userModel');

    return function (req, res, next) {

    	userModel.findOne({
    		_id: req.param('userid')
    	}, function (err, result) {
    		if (err) {
    			return res.redirect('/users');
    		}

    		res.tpl.user = result;
    		return next();
    	});
    };
};