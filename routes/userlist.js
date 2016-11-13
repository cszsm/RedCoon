var renderMW = require('../middleware/generic/render');

var getUserMW = require('../middleware/users/getUser');
var getUserListMW = require('../middleware/users/getUserList');
var updateUserMW = require('../middleware/users/updateUser');
var deleteUserMW = require('../middleware/users/deleteUser');

var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Adds a new user
     */
    app.use('/users/new',
        updateUserMW(objectRepository),
        renderMW('user_modify')
    );

    /**
     * Modifies the user
     */
    app.use('/users/:userid/modify',
        getUserMW(objectRepository),
        updateUserMW(objectRepository),
        renderMW('user_modify')
    );

    /**
     * Deletes the user
     */
    app.use('/users/:userid/delete',
        getUserMW(objectRepository),
        deleteUserMW(objectRepository)
    );

    /**
     * Shows a user's details
     */
    app.use('/users/:userid',
        getUserMW(objectRepository),
        renderMW('user')
    );

    /**
     * Lists all users
     */
    app.use('/users',
        getUserListMW(objectRepository),
        renderMW('users')
    );
};