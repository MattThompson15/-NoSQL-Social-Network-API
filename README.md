# NoSQL-Social-Network-API
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
* Start the Server, `node server.js`.
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

## Screenshot

<img width="1440" alt="Screenshot 2024-01-16 at 9 35 32 PM" src="https://github.com/MattThompson15/NoSQL-Social-Network-API/assets/139708928/9872d826-0f0b-431a-8dd2-3a2366f709d7">


## License

MIT License

Copyright (c) 2024 MattThompson15

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
