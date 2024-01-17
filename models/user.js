const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    // Email adress, unique and required, validated with a regex pattern
    email: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            }
        }
    },

    // Array of _id values referencing the Thought model
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],

    //Array of friend IDs, self-referencing the User model
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
    ],
},
{   
    // Include virtuals when converting documents to JSON   
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

// Virtual property to count the number of friends a user has
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);
    
module.exports = User;