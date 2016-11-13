var renderMW = require('../middleware/generic/render');

var getPetMW = require('../middleware/pets/getPet');
var getPetListMW = require('../middleware/pets/getPetList');
var updatePetMW = require('../middleware/pets/updatePet');
var deletePetMW = require('../middleware/pets/deletePet');

module.exports = function (app) {

    /**
     * Modifies the user
     */
    app.use('/pets/:petid/modify',
        getPetMW(),
        updatePetMW(),
        renderMW('pet_modify')
    );

    /**
     * Deletes the pet
     */
    app.use('/pets/:petid/delete',
        getPetMW(),
        deletePetMW()
    );

    /**
     * Lists all pets
     */
    app.use('/pets',
        getPetListMW(),
        renderMW('pets')
    );
};