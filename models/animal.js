// import the connected mongoose object
const mongoose = require("./connection")


/////////////////////////////////////////
// Our Model
/////////////////////////////////////////
const {Schema, model} = mongoose

const animalSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String
})

const Animal = model("Animal", animalSchema)

//export the model
module.exports = Animal