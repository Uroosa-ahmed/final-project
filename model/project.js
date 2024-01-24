
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');

const ProjectSchema = new Schema({
    title: String,
    developer: String,
    description: String,
     url: String,
    });
 
ProjectSchema.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('projects', ProjectSchema);



