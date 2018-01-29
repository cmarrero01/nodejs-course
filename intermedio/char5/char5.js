const mongoose = require('mongoose');
const User = require('./user_model.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/user/get/all',(req,res)=>{
    findAll(req,res);
});

app.get('/user/get/:userId',(req,res)=>{
    User.findById(req.params.userId,(err,doc)=>{
        res.json(doc);
    })
});

app.post('/user/new',(req,res)=>{
    User.create(req.body,(err,doc)=>{
        res.json(doc);
    })
});

app.post('/user/remove',(req,res)=>{
    User.remove({_id: req.body.userId},(err,doc)=>{
        res.json(doc);
    })
});

app.listen(3000,(err)=>{
    console.log(err);
});

mongoose.connect('mongodb://localhost/LearnNode',(err,connection)=>{

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

/**
 * Find All users
 * @param req
 * @param res
 */
function findAll(req,res){
    User.find({})
        .exec((err,doc)=>{
            res.json(doc);
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