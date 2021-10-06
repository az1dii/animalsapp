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
    { name: "Whale", lifeExpectancy: 100, extinct: false },
    { name: "Frog", lifeExpectancy: 14, extinct: false },
    { name: "Elephant", lifeExpectancy: 56, extinct: false },
    { name: "Goat", lifeExpectancy: 18, extinct: false },
    { name: "Bear", lifeExpectancy: 25, extinct: false },
  ]


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