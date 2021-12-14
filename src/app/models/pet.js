const database = require("mongoose");

const PetData = new database.schema({
    name : String,
    breed : String,
    age : Number
}, {timestamps: true}); 

module.exports = database.model("pets", PetData);

