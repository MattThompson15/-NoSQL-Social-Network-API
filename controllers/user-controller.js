const { User } = require('../models');

const UserController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
        .populate('thougts')
        .populate('friends')
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
    },

    // Get user by Id
    getUserById(req, res) {
        User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends')
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Create a user
    createUser(req, res) {
        User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json(err));
    },

    // Update a user
    updateUserById(req, res) {
        User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Delete a user
    deleteUserById(req, res) {
        User.findByIdAndDelete(req.params.userId)
        .then(user => user ? res.json({ message: 'User deleted!' }) : res.status(404).json({ message: 'No user found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Add a friend
    addFriend(req, res) {
        User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true })
        .populate('friends')
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Delete a friend
    removeFriend(req, res) {
        User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true })
        .populate('friends')
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this id!' }))
        .catch(err => res.status(500).json(err));
    },
    };

module.exports = UserController;