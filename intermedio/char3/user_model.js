/**
 * user Model Schema
 * @module _Rest
 * @submodule user_model
 * @author Claudio A. Marrero
 * @class _Rest.user_model
 */
'use strict';

var mongoose = require('mongoose');

module.exports = function(){

    /**
     * A Schema for user
     * @property schema
     * @type {Mongoose.Schema}
     * @private
     */
    var schema = mongoose.Schema({
        "name":{type: String},
        "displayName":{type: String},
        "email":{type: String, required: true, unique: true},
        "password":{type: String, required: true},
        "createdAt": {type: Date, default: Date.now}
    });

    schema.index({"createdAt": 1});
    schema.index({"email": 1});

    return mongoose.model('user', schema);
};