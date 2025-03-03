const express = require("express");
const AuthRoutes = express.Router();
const AuthController = require("../controllers/AuthController");
const passport = require("../middleware/PassportMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// Auth Route
AuthRoutes.get("/authsignin", AuthController.authsignin);
AuthRoutes.get("/authsignup", AuthController.authsignup);
AuthRoutes.get("/SignOut", AuthController.SignOut);
AuthRoutes.post("/register", AuthController.register);
AuthRoutes.post("/login", passport.authenticate('local', { failureRedirect: '/login' }), AuthController.authLogin);

module.exports = AuthRoutes