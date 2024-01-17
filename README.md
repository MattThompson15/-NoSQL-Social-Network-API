# -NoSQL-Social-Network-API
This project is a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.  It uese Express.js for routing, a MongoDB database, Insomnia to test the routing, and Mongoose ODM to handle large amounts of unstructured data.

## Features

* Create, read, update, and delete users and their thoughts.
* Add and remove friends to a user's friend list.
* Add and remove reactions to thoughts.

## Technologies

* Node.js
* Express.js
* MongoDb
* Mongoose ODM
* Insomnia

## Installation

* Clone the repository to your local machine.
* Navigate to the project directory.
* Install required npm packages, `npm install`.
* Start the Server, `npm start`.
* Once the server is running, you can use API testing tools available to us in Insomnia to interact with the API.

### API Endpoints

#### Users

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:userId**: Retrieve a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:userId**: Update a user by ID.
- **DELETE /api/users/:userId**: Delete a user by ID.

#### Thoughts

- **GET /api/thoughts**: Retrieve all thoughts.
- **GET /api/thoughts/:thoughtId**: Retrieve a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:thoughtId**: Update a thought by ID.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by ID.

#### Friends

- **POST /api/users/:userId/friends/:friendId**: Add a friend.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend.

#### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought.

## Contributing

Contributions to this project are welcome. 

## License

MIT
