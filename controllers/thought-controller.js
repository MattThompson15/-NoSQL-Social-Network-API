const { Thought, User } = require('../models');

const ThoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(thoughts => res.json(thoughts))
        .catch(err => res.status(500).json(err));
    },

    // Get one thought by id
    getThoughtById(req, res) {
        Thought.findById(req.params.thoughtId)
        .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Create a thought
    createThought(req, res) {
        Thought.create(req.body)
        .then(thought => res.status(201).json(thought))
        .catch(err => res.status(500).json(err));
    },

    // Delete a thought
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.thoughtId)
        .then(thought => thought ? res.json({ message: 'Thought deleted!' }) : res.status(404).json({ message: 'No thought found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Update a thought
    updateThoughtById(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true })
        .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Create a reaction
    createReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true })
        .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id!' }))
        .catch(err => res.status(500).json(err));
    },

    // Delete a reaction
    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
        .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id!' }))
        .catch(err => res.status(500).json(err));
    },
};

module.exports = ThoughtController;