const mongoose = require('mongoose');

let schema = mongoose.Schema({
    "name": {type: String},
    "email": {type: String, unique: true, required: true},
    "password": {type: String, required: true}
});

let User = mongoose.model('user',schema);

module.exports = User;