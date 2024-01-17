const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//Content of the thought, with a minimum and maximum lenght
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: timestamp => new Date(timestamp).toLocaleDateString()
    },
    // Username of the thought's creator
    username: {
        type: String,
        required: true
    },
    // Use ReactionsSchema to validate data for a reply
    reactions: [reactionSchema]
},
{   
    // Include virtuals when converting documents to JSON
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
});

// Virtual property to count the number of reactions to a thought
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;