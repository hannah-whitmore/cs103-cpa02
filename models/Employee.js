'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var employeeSchema = Schema( {
    name: String, 
    title: String, 
    Double: Number,
    Double:Number,
    company: String,
    Double: Number,

} );

module.exports = mongoose.model( 'Employee', employeeSchema );