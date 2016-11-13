	/**
 * Redirects the user from the / main page to the userlist
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        return res.redirect('/users');
    };
};