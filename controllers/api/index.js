const router = require('express').Router();

const friendRoutes = require('./friend-routes');
const userRoutes = require('./user-routes');

router.use('/friend', friendRoutes);
router.use('/user', userRoutes);

module.exports = router;