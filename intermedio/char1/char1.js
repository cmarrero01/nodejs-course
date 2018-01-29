let mongoose = require('mongoose');

let schema = mongoose.Schema({
    "name": {type: String},
    "email": {type: String, unique: true, required: true},
    "password": {type: String, required: true}
});

let User = mongoose.model('user',schema);

mongoose.connect('mongodb://localhost/LearnNode',(err,connection)=>{

    let newUser = new User({
        "name": "Claudio Marrero",
        "email": "cosme@fulanito.com",
        "password": "123456"
    });

    newUser.save((err,doc)=>{
        console.log(err);
    });
});

