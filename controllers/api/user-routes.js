const router = require('express').Router();
<<<<<<< HEAD
const { User, Dog} = require('../../models');
=======
const { User } = require('../../models');
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b

// The `/api/users` endpoint

router.get('/', (req, res) => {
  // find all users
<<<<<<< HEAD
  // be sure to include their associated dogs
=======
  // be sure to include its associated Products
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
<<<<<<< HEAD
      'name',
      'username',
      'email',
      'password',
      'profileImage'
    ],
    order: [['name']],
    include: [
      {
        model: Dog,
        attributes: ['id', 'name', 'breed'],
      }
    ]
=======
      'dog_name',
      'owner_name',
      'dog_age',
      'dog_breed',
    ],
    order: [['dog_name']],
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.get('/:id', (req, res) => {
  // find one user by their `id` value
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.post('/', (req, res) => {
  // create a new user
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profileImage: req.body.profileImage
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a user by its `id` value
  User.update(
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile: req.body.profile
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a user by its `id` value
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      console.log("destroyed");
      res.status(204).end();
    });

    
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;
=======
module.exports = router
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
