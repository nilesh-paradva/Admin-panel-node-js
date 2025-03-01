const express = require("express");
const AuthRoutes = express.Router();
const AuthController = require("../controllers/AuthController")

// Auth Route
AuthRoutes.get("/authsignin", AuthController.authsignin);
AuthRoutes.get("/authsignup", AuthController.authsignup);
AuthRoutes.get("/SignOut", AuthController.SignOut);
AuthRoutes.post("/register", AuthController.register);
AuthRoutes.post("/login", AuthController.authLogin);

module.exports = AuthRoutes