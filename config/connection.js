const mongoose = require('mongoose');

// COnnect to MongoDB using MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tech-blog', {
});
// Export the connection object
module.exports = mongoose.connection;