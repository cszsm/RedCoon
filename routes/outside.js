var mainRedirectMW = require('../middleware/generic/mainRedirect');
var userModel = require('../models/user');

module.exports = function (app) {

	var objectRepository = {
		userModel: userModel
	};

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW(objectRepository)
    );
};