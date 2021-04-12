<<<<<<< HEAD
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
=======
const router = require('express').Router()
const apiRoutes = require('./api/')

router.use('/api', apiRoutes)

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
