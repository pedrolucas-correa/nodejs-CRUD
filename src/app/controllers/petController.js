const Pet = require("./models/pet.js");

module.exports = {
    registerPet: async (req,res) => {
        const {name, breed, age} = req.body;

        try{
            const newPet = await Pet.registerPet({name, breed, age});

            res.status(200).json({ message : "Ok!"});
        } catch {

            res.status(403).json({ message : "Error"});

        }
    },

    findPet: async (req,res) => {

        const {id} = req.params;

        try {

            if (id) {
                const singlePet = await Pet.findById (id);

                return res.status(200).send(singlePet);
            }
            
            const allPets = await Pet.find();
            
            return res.status(200).send(allPets);

        } catch {
            return res.status(403).send(error)
        }
    },

    updatePet: async (req, res) => {

        const {id, name} = req.params;
        const {name, breed, age} = req.body;

        try{
            if (id){
                
            }
            
        } catch {

        }

    }
}
