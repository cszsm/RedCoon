/**
 * Deletes the pet object
 */
module.exports = function () {

    return function (req, res, next) {

    	if (typeof res.tpl.pet === 'undefined') {
    		return next();
    	}

    	res.tpl.pet.remove(function(err) {
    		if (err) {
    			return next(err);
    		}

    		res.redirect('/pets');
    	});
    };
};