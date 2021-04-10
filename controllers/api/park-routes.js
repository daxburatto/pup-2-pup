const router = require('express').Router();
const { Park} = require('../../models');

// The `/api/parks` endpoint

// get all parks
router.get('/', (req, res) => {
  console.log('======================');
  Park.findAll({
    attributes: [
      'id',
      'name',
      'lat',
      'long'
    ],
    order: [['id']],
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one park
router.get('/:id', (req, res) => {
  console.log('======================');
  Park.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'lat',
      'long'
    ],
    order: [['id']],
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new park
router.post('/', (req, res) => {
Park.create({
  name: req.body.name,
  lat: req.body.lat,
  long: req.body.long,
})
.then(dbPostData => res.json(dbPostData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
  
});

// update event
router.put('/:id', (req, res) => {
  Park.update(
    {
      name: req.body.name,
      lat: req.body.lat,
      long: req.body.long,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No park found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // delete event by its `id` value
router.delete('/:id', (req, res) => {

  Park.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No park found with this id' });
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