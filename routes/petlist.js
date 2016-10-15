var getPetMW = require('../middleware/pets/getPet');
var getPetListMW = require('../middleware/pets/getPetList');
var updatePetMW = require('../middleware/pets/updatePet');
var deletePetMW = require('../middleware/pets/deletePet');

module.exports = function (app) {

    /**
     * Lists all pets
     */
    app.use('/pets',
        getPetListMW()
    );

    /**
     * Modifies the user
     */
    app.use('/pets/:petid/modify',
        getPetMW(),
        updatePetMW()
    );

    /**
     * Deletes the pet
     */
    app.use('/pest/:petid/delete',
        getPetMW(),
        deletePetMW()
    );
};