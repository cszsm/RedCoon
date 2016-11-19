/**
 * Deletes the pet object
 */
module.exports = function () {

    return function (req, res, next) {

    	if (typeof res.tpl.pets === 'undefined') {
    		return next();
    	}

    	res.tpl.pets.forEach(function (pet) {
            pet.remove(function (err) {
                if (err) {
                    return next(err);
                }
            });
        });

    	return next();
    };
};