const router = require('express').Router();
const { User, Dog} = require('../../models');

// The `/api/users` endpoint

router.get('/', (req, res) => {
  // find all users
  // be sure to include their associated dogs
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
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
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
    profile: req.body.profile
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


module.exports = router;