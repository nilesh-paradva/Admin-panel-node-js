const express = require("express");
const routes = express.Router();
const indexController = require("../controllers/indexController.js")
const AuthMiddleware = require("../middleware/indexmiddleware.js");
const upload = require("../middleware/ProfileImgUpload.js");
const user = require("../middleware/userGetmiddleware.js")


routes.get("/", AuthMiddleware, user, indexController.HomeController);
routes.get("/bcbutton", AuthMiddleware, user, indexController.bc_buttonController);
routes.get("/bccollapse",  AuthMiddleware, user, indexController.bc_collapse);
routes.get("/bcprogress",  AuthMiddleware, user, indexController.bc_progress);
routes.get("/bctabs",  AuthMiddleware, user, indexController.bc_tabs);
routes.get("/bctypography",  AuthMiddleware, user, indexController.bc_typography);
routes.get("/bcbadges", AuthMiddleware, user, indexController.bc_badges);
routes.get("/bcpagenation", AuthMiddleware, user, indexController.bc_pagenation);
routes.get("/samplepage", AuthMiddleware, user, indexController.samplepage);
routes.get("/mapgoogle", AuthMiddleware, user, indexController.mapgoogle);
routes.get("/formeelement", AuthMiddleware, user, indexController.formelement);
routes.get("/chart", AuthMiddleware, user, indexController.chart);
routes.get("/tbl", AuthMiddleware, user, indexController.tbl);
routes.get("/profile", AuthMiddleware, user, indexController.profile)

// Auth Route
routes.get("/authsignin", indexController.authsignin);
routes.get("/authsignup", indexController.authsignup);
routes.get("/SignOut", indexController.SignOut);
routes.post("/register", indexController.register);
routes.post("/login", indexController.authLogin);
routes.post("/profileEdit/:id", indexController.profileEdit)
routes.post("/profileImg/:id", upload.single("profileImg"), indexController.profileImg)

module.exports= routes