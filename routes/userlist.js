var getUserMW = require('../middleware/users/getUser');
var getUserListMW = require('../middleware/users/getUserList');
var updateUserMW = require('../middleware/users/updateUser');
var deleteUserMW = require('../middleware/users/deleteUser');

module.exports = function (app) {

    /**
     * Lists all users
     */
    app.use('/users',
        getUserListMW()
    );

    /**
     * Shows a user's details
     */
    app.use('/users/:userid',
        getUserMW()
    );

    /**
     * Adds a new user
     */
    app.use('/users/new',
        updateUserMW()
    );

    /**
     * Modifies the user
     */
    app.use('/users/:userid/modify',
        getUserMW(),
        updateUserMW()
    );

    /**
     * Deletes the user
     */
    app.use('/users/:userid/delete',
        getUserMW(),
        deleteUserMW()
    );
}