const router = require('express').Router();

const friendRoutes = require('./friend-routes');

router.use('/friend', friendRoutes);

module.exports = router;