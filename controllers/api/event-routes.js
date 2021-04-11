const router = require('express').Router();
const { User, Event} = require('../../models');

// The `/api/events` endpoint

// get all events
router.get('/', (req, res) => {
  // find all events
  // be sure to include its associated Park and User
  console.log('======================');
  Event.findAll({
    attributes: [
      'id',
      'name',
      'date',
      'time'
    ],
    order: [['id']],
    include: [
      {model: User,
      attributes: ['username']
    }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one event
router.get('/:id', (req, res) => {
  // find a single event by its `id`
  // be sure to include its associated User and Park
  console.log('======================');
  Event.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'date',
      'time'
    ],
    order: [['id']],
    include: [
      {model: User,
      attributes: ['username']
    }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new event
router.post('/', (req, res) => {
Event.create({
  name: req.body.name,
  date: req.body.date,
  time: req.body.time,
  user_id: req.body.user_id
})
.then(dbPostData => res.json(dbPostData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
  
});

// update event
router.put('/:id', (req, res) => {
  Event.update(
    {
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No event found with this id' });
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

  Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No event found with this id' });
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