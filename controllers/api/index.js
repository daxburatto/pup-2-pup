const router = require('express').Router();
<<<<<<< HEAD
const dogRoutes = require('./dog-routes');
const eventRoutes = require('./event-routes');
const parkRoutes = require('./park-routes');
const userRoutes = require('./user-routes');

router.use('/dogs', dogRoutes);
router.use('/events', eventRoutes);
router.use('/parks', parkRoutes);
router.use('/users', userRoutes);

module.exports = router;
=======
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
