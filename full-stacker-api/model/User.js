let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;


