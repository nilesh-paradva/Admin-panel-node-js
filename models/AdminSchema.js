const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    username: {type: String, required: true,},
    email: {type: String, required: true,},
    password: {type: String, required: true,},
    phonenumber: {type: Number,  default: null},
    address: {type: String, default: null},
    dob: {type: Date, default: null},
    gender: {type: String,  default: null},
    language: {type: String, default: null},
    postalcode: {type: Number, default: null},
    city: {type: String, default: null},
    state: {type: String, default: null},
    country: {type: String, default: null},
    avatar :{type: String, default: null},
    status :{type: String, default: "Active"},
    bio : {type : String, default :null},
    timezone:{type : String, default : null},
    linkedin:{type: String, default : null},
    facebook:{type: String, default : null},
    instagram:{type: String, default : null},
    membership_level:{type : String, default : null}

},{timestamps:true});

const AdminModel = mongoose.model("admins", AdminSchema);
module.exports = AdminModel;
