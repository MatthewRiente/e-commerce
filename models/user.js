const mongoose = require('mongoose');

// a schema is a blueprint for how you want a document to look like
var UserSchema = new mongoose.Schema({
    fname: {
        // the type of data is a string
        type: String,
        // wont submit if this data is not here
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
};