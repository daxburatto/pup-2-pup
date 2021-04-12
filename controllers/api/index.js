const router = require('express').Router();
const dogRoutes = require('./dog-routes');
const eventRoutes = require('./event-routes');
const parkRoutes = require('./park-routes');
const userRoutes = require('./user-routes');

router.use('/dogs', dogRoutes);
router.use('/events', eventRoutes);
router.use('/parks', parkRoutes);
router.use('/users', userRoutes);

module.exports = router;
