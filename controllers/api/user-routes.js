const router = require('express').Router();
const { User } = require('../../models');

// The `/api/users` endpoint

router.get('/', (req, res) => {
  // find all users
  // be sure to include its associated Products
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
      'dog_name',
      'owner_name',
      'dog_age',
      'dog_breed',
    ],
    order: [['dog_name']],
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router