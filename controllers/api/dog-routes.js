const router = require('express').Router();
const { User, Dog } = require('../../models');

// The `/api/dogs` endpoint

router.get('/', (req, res) => {
  // find all dogs
  // be sure to include their associated owners
  console.log('======================');
  Dog.findAll({
    attributes: [
      'id',
      'name',
      'gender',
      'breed',
      'age',
      'bio',
      'weight',
      'energy',
      'patience',
      'dominance',
      'image'
    ],
    order: [['id']],
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'email'],
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
  // find one dog by their `id` value
  Dog.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'gender',
      'breed',
      'age',
      'bio',
      'weight',
      'energy',
      'patience',
      'dominance',
      'image'
    ],
    order: [['name', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['id', 'name'],
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
  // create a new dog
  Dog.create({
      name: req.body.name,
      gender: req.body.gender,
      breed: req.body.breed,
      age: req.body.age,
      bio: req.body.bio,
      weight: req.body.weight,
      energy: req.body.energy,
      patience: req.body.patience,
      dominance: req.body.dominance,
      image: req.body.image,
      user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a dog by its `id` value
  Dog.update(
    {
      name: req.body.name,
      gender: req.body.gender,
      breed: req.body.breed,
      age: req.body.age,
      bio: req.body.bio,
      weight: req.body.weight,
      energy: req.body.energy,
      patience: req.body.patience,
      dominance: req.body.dominance,
      image: req.body.image
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No dog found with this id' });
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
  Dog.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No dog found with this id' });
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