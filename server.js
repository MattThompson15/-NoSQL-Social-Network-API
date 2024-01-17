const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the defined routes
app.use(routes)

// Connect the database and start the server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Social Network running on port ${PORT}!`);
    });
  });