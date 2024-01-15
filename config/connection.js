const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tech-blog', {
});

module.exports = mongoose.connection;