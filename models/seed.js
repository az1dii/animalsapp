////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const mongoose = require("./connection");
const Fruit = require("./fruit");

////////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

mongoose.connection.on("open", () => {
  // Run database queries in this function

  // create array of starter
  const startAnimals = [
    { name: "Whale", color: "Blue", adult: false },
    { name: "Frog", color: "Green", adult: false },
    { name: "Elephant", color: "Grey", adult: false },
    { name: "Goat", color: "White", adult: false },
    { name: "Beer", color: "Brown", adult: false },
  ];

  // Delete all animals
  Animal.deleteMany({}, (err, data) => {
      //seed starter animals
      Animal.create(startAnimals, (err, data) => {
          // log the create animals to confirm
      console.log("--------ANIMAL CREATED----------");
      console.log(data);
      console.log("--------ANIMAL CREATED----------");

      // close the DB connection
      mongoose.connection.close();
      })
  })
});