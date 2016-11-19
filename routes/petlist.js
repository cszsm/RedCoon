var renderMW = require('../middleware/generic/render');

var getUserMW = require('../middleware/users/getUser');
var getUserListMW = require('../middleware/users/getUserList');

var getPetMW = require('../middleware/pets/getPet');
var getPetListMW = require('../middleware/pets/getPetList');
var updatePetMW = require('../middleware/pets/updatePet');
var deletePetMW = require('../middleware/pets/deletePet');

var userModel = require('../models/user');
var petModel = require('../models/pet');

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel,
        petModel: petModel
    };

    /**
     * Adds a new pet
     */
    app.use('/pets/:userid/new',
        getUserMW(objectRepository),
        getUserListMW(objectRepository),
        updatePetMW(objectRepository),
        renderMW('pet_modify')
    );

    /**
     * Modifies the pet
     */
    app.use('/pets/:userid/:petid/modify',
        getUserMW(objectRepository),
        getUserListMW(objectRepository),
        getPetMW(objectRepository),
        updatePetMW(objectRepository),
        renderMW('pet_modify')
    );

    /**
     * Deletes the pet
     */
    app.use('/pets/:userid/:petid/delete',
        getUserMW(objectRepository),
        getPetMW(objectRepository),
        deletePetMW(objectRepository)
    );

    /**
     * Lists all pets
     */
    app.use('/pets',
        getPetListMW(objectRepository),
        getUserListMW(objectRepository),
        renderMW('pets')
    );
};