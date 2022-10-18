const mongoose = require('mongoose')

// Make a Schema 
const PokeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    isCute: Boolean 
})

// Make a Model From the Schema -- let us update documents in the collection 
const Poke = mongoose.model('Poke', PokeSchema) // we make Poke collection inside the Database 

// Export the Model For Use in the App 
module.exports = Poke