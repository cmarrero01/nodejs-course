const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let create = require('./create.js')(app);
let find = require('./find.js')(app);
let remove = require('./remove.js')(app);
let update = require('./update.js')(app);


app.listen(3000,(err)=>{
    console.log(err);
});

mongoose.connect('mongodb://localhost/LearnNode',(err,connection)=>{

});
