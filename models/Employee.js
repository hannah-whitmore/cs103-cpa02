'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var employeeSchema = Schema( {
    name: String, 
    title: String, 
    rate: Number,
    hours_week:Number,
    company: String,
    years_company: Number,

} );

module.exports = mongoose.model( 'Employee', employeeSchema );