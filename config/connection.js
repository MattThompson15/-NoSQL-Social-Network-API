const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social-network-api', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;