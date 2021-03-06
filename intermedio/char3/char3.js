const mongoose = require('mongoose');
const User = require('./user_model.js');

mongoose.connect('mongodb://localhost/LearnNode',(err,connection)=>{


    // let obj = [
    //     {
    //         "name": "Mou",
    //         "email": "mou@dictioz.com",
    //         "password": "123456"
    //     },
    //     {
    //         "name": "Berny",
    //         "email": "berny@dictioz.com",
    //         "password": "123456"
    //     }
    // ];
    //
    // addUser(obj);

    // editUserByEmail('cosme@fulanito.com',{ "name": "Cosme Fulanito"});

    // findAll();

    // removeById('5a6f23928c248a07703c7bcb');

    removeByEmail('mou@dictioz.com');
});

/**
 * Crear 1 usuario o varios.
 * @param obj
 */
function addUser(obj){
    User.create(obj,(err,doc)=>{
        console.log("Usuario creado");
    })
}

/**
 * Update user
 * @param email
 * @param obj
 */
function editUserByEmail(email,obj){
    User.findOneAndUpdate({email: email},{$set:obj},{new: true},(err,doc)=>{
        console.log(err,doc);
    })
}

function findAll(){
    User.find({})
        .exec((err,doc)=>{
        console.log(doc);
        })
}

function removeById(userId){
    User.remove({_id: userId},(err,doc)=>{
        console.log(doc);
    })
}

/**
 * Remove by Email
 * @param email
 */
function removeByEmail(email){
    User.remove({email: email},(err,doc)=>{
        console.log(doc);
    })
}