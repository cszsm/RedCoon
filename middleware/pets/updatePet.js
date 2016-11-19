var requireOption = require('../common').requireOption;

/**
 * Creates or updates a pet
 */
module.exports = function (objectRepository) {

	var petModel = requireOption(objectRepository, 'petModel');

    return function (req, res, next) {

    	if (typeof req.body.name === 'undefined' ||
    		typeof req.body.species === 'undefined') {
    		return next();
    	}

    	var pet = undefined;
    	if (typeof res.tpl.pet !== 'undefined') {
    		pet = res.tpl.pet;
    	} else {
    		pet = new petModel();
    	}

    	pet.name = req.body.name;
    	pet.species = req.body.species;
    	pet._owner = req.body.owner;

    	pet.save(function(err, result) {
    		if(err) {
    			return next(err);
    		}

    		return res.redirect('/pets');
    	});
    };
};