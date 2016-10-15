/**
 * Redirects the user from the / main page to the userlist
 */
module.exports = function () {
    return function (req, res, next) {
        return next();
    };
};