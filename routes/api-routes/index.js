const router = require('express').Router();

// Import sub-routers
const userRoutes = require('./user-routes');

const thoughtRoutes = require('./thought-routes');

// Use sub-routers
router.use('/user', userRoutes);

router.use('/thought', thoughtRoutes);



module.exports = router;