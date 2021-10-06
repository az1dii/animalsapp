///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const express = require("express")
const Animal = require("../models/animal")

///////////////////////////////////////
// create router
///////////////////////////////////////
const router = express.Router()

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  });
  
///////////////////////////////////////
// routes
///////////////////////////////////////
  
router.get("/seed", (req, res) => {
    // array of starter animals
  const startAnimals = [
    { name: "Whale", color: "Blue", adult: false },
    { name: "Frog", color: "Green", adult: false },
    { name: "Elephant", color: "Grey", adult: false },
    { name: "Goat", color: "White", adult: false },
    { name: "Beer", color: "Brown", adult: false },
  ]

  // Delete All Animals
  Animal.deleteMany({}, (err, data) => {
      // seed starter animals
      Animal.create(startAnimals , (err, data) => {
          // sending the new animals as a response
          res.json(data)
      })
  })
})

// Index Route (Get => /animals)
router.get("/", (req, res) => {
    Animal.find({username: req.session.username}, (err, animals) => {
        res.render("animals/index.ejs", {animals})
    })
})

// New Route (Get => /animals/new)
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})

router.post("/", (req, res) => {
    req.body.adult = req.body.adult === "on" ? true : false
    // add the username to req.body
    req.body.username = req.session.username
    // create the new animal
    Animal.create(req.body, (err, animal) => {
        //send the user back to index
        res.redirect("/animals")
    })
})

// The Edit Route (Get => /animals/:id/edit)
router.get("/:id/edit", (req, res) => {
    const id = req.params.id // get id from params
    // get animals from database
    Animal.findById(id,(err, animal) => {
        //render a template
        res.render("animals/edit.ejs", {animal})
    })

})

// THe Update Route (PUT => /animals/:id)
router.put("/:id", (req, res) =>{
    // get the id param
    const id = req.params.id
    req.body.adult = req.body.adult === "on" ? true : false
    //update the animal
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal) => {
        //redirect back to main page
        res.redirect("/animals")
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Animal.findByIdAndRemove(id, (err, animal) => {
        res.redirect("/animals")
    })
})

// THe Show (GET => /animals/:id)
router.get("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id

    Animal.findById(id, (err, animal) => {
        //render the template
        res.render("animals/show.ejs", {animal})
    })
})

///////////////////////////////////////
// export the router
///////////////////////////////////////
module.exports = router