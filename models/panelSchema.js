const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number, 
      default: null
    },
    address: {
      type: String,
      default: null
    },
    dob: {
      type: Date,
      default: null
    },
    gender: {
      type: String, 
      default: null
    },
    language: {
      type: String,
      default: null
    },
    postalcode: {
      type: Number,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    },
    country: {
      type: String,
      default: null
    },
    path :{
      type: String,
      default: null
    },
    bio : {
      type : String,
      default :null
    },
    timezone:{
      type : String,
      default : null
    },
    status:{
      type: Boolean,
      default : null
    },
    membership_level:{
      type : String,
      default : null
    }
  }, 
);

const UserSchemaModel = mongoose.model("admins", UserSchema);

module.exports = UserSchemaModel;
