var mainRedirectMW = require('../middleware/generic/mainRedirect');

module.exports = function (app) {

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW()
    );
};