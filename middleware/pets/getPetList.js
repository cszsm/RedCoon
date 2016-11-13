/**
 * Gets the pet list
 */
module.exports = function () {

    return function (req, res, next) {

        res.tpl.pets = ["Itt kisállat lesz.", "És itt is.", "Meg itt is."];
        return next();
    };
};