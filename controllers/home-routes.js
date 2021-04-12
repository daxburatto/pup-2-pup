const router = require("express").Router();
const { Dog, User, Event, Park } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    username: req.session.username,
    userid: req.session.user_id,
  });
});

// see profile
router.get("/Profile/:id", (req, res) => {
  console.log("======================");
  
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'username',
      'email',
      'password',
      'profileImage'
    ],
    order: [['name', 'DESC']],
    include: [
      {
        model: Dog,
        attributes: ['id', 'name', 'breed'],
      }
    ]
  })
    .then((dbUserData) => {
      
      const user = dbUserData.get({ plain: true });
      console.log(user);
      res.render("profile", {
        user,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        userid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// see all dogs
router.get("/Users", (req, res) => {
  console.log("======================");
  Dog.findAll({
    attributes: ["id", "name", "gender", "breed", "age"],
  })
    .then((dbDogData) => {
      const dogs = dbDogData.map((dog) => dog.get({ plain: true }));

      res.render("user", {
        dogs,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        userid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// see dog/user info
router.get("/Dog/:id", (req, res) => {
  console.log("======================");
  Dog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "name",
      "gender",
      "breed",
      "age",
      "bio",
      "weight",
      "energy",
      "patience",
      "dominance",
      "image",
    ],
    order: [["id"]],
    include: [
      {
        model: User,
        attributes: ["id", "username", "name", "email"],
      },
    ],
  })
    .then((dbDogData) => {
      const dog = dbDogData.get({ plain: true });
      console.log(dog);
      res.render("dog", {
        dog,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        userid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all events
router.get("/Events", (req, res) => {
  console.log("======================");
  Event.findAll({
    attributes: ["name", "date", "time"],
  })
    .then((dbEventData) => {
      const events = dbEventData.map((event) => event.get({ plain: true }));

      res.render("event", {
        events,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        userid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all parks
router.get("/Parks", (req, res) => {
  console.log("======================");
  Park.findAll({
    attributes: ["name", "long", "lat"],
  })
    .then((dbParkData) => {
      const parks = dbParkData.map((park) => park.get({ plain: true }));

      res.render("park", {
        parks,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        userid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

module.exports = router;
