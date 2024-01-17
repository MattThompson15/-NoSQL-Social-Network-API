const router = require('express').Router();
const apiRoutes = require('./api-routes');
// Define the main API route
router.use('/api',apiRoutes);
// Fallback for undefined routes
router.use((req, res) => {
    return res.status(404).send('Not Found');
});

module.exports = router;