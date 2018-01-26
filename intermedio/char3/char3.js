var mongoose = require('mongoose');
var User = require('./user_model.js');

mongoose.connect('mongodb://localhost/LearnNode',function(err,connection){

    var users = [{
        "name": "Claudio Marrero",
        "displayName": "Claudio",
        "email": "hello@dictioz.com",
        "password": "123456"
    },{
        "name": "Juan Perez",
        "displayName": "Juan",
        "email": "juan@dictioz.com",
        "password": "123456"
    },{
        "name": "Cosme Fulanito",
        "displayName": "Claudio",
        "email": "cosme@dictioz.com",
        "password": "123456"
    },{
        "name": "Moe",
        "displayName": "Moe",
        "email": "moe@dictioz.com",
        "password": "123456"
    },{
        "name": "Mr Berns",
        "displayName": "Berns",
        "email": "berns@dictioz.com",
        "password": "123456"
    }];

    adduser(users);

});


function adduser(obj){
    User.create(obj,function(err,doc){
        console.log(err,doc);
    })
}

function editUserById(userId,data){
    User.findByIdAndUpdate(userId,{$set:data},{new:true},function(err,doc){
        console.log(err,doc);
    })
}

function editUserByEmail(email,data) {
    User.findOneAndUpdate({email: email},{$set:data},{new:true},function(err,doc){
        console.log(err,doc);
    })
}
