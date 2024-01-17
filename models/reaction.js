const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({
    // Unique ID for the reaction, automatically generated
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    // Text content of the reaction, limited t0 280 characters
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    // Username of the reaction's creator   
    username: {
        type: String,
        required: true
    },
    // Tinestamp for when the reaction was cerated, deafults to current timestamp
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleDateString()
    },
},
{   
    // Configures the behaviour of the schema to include virtuals when converting to JSON
    toJSON: {
        getters: true
    },
    // Prevents the virtual id field from being added to the schema
    id: false
}
    
);


module.exports = ReactionSchema;