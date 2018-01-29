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

    editUserByEmail('cosme@fulanito.com',{ "name": "Cosme Fulanito"});
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