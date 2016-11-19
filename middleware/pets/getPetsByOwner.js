var requireOption = require('../common').requireOption;

/**
 * Gets pets by owner
 */
module.exports = function (objectRepository) {

	var petModel = requireOption(objectRepository, 'petModel');

	return function (req, res, next) {

		petModel.find({
			_owner: req.param('userid')
		}, function (err, results) {
			if (err) {
				return next(err);
			}

			res.tpl.pets = results;
			return next();
		});
	};
};