/**
 * Deletes the user object
 */
module.exports = function () {

    return function (req, res, next) {

    	if (typeof res.tpl.user === 'undefined') {
    		return next();
    	}

    	res.tpl.user.remove(function(err) {
    		if (err) {
    			return next(err);
    		}

    		res.redirect('/users');
    	});
    };
};