const express = require("express");
const routes = express.Router();
const HomeController = require("../controllers/HomeController.js");
const AuthMiddleware = require("../middleware/AuthMiddleware.js");
const AdminGet = require("../middleware/userGetmiddleware.js");

routes.get("/", AuthMiddleware, AdminGet, HomeController.HomeController);
routes.get("/bcbutton", AuthMiddleware, AdminGet, HomeController.bc_buttonController);
routes.get("/bccollapse",  AuthMiddleware, AdminGet, HomeController.bc_collapse);
routes.get("/bcprogress",  AuthMiddleware, AdminGet, HomeController.bc_progress);
routes.get("/bctabs",  AuthMiddleware, AdminGet, HomeController.bc_tabs);
routes.get("/bctypography",  AuthMiddleware, AdminGet, HomeController.bc_typography);
routes.get("/bcbadges", AuthMiddleware, AdminGet, HomeController.bc_badges);
routes.get("/bcpagenation", AuthMiddleware, AdminGet, HomeController.bc_pagenation);
routes.get("/samplepage", AuthMiddleware, AdminGet, HomeController.samplepage);
routes.get("/mapgoogle", AuthMiddleware, AdminGet, HomeController.mapgoogle);
routes.get("/formeelement", AuthMiddleware, AdminGet, HomeController.formelement);
routes.get("/chart", AuthMiddleware, AdminGet, HomeController.chart);
routes.get("/tbl", AuthMiddleware, AdminGet, HomeController.tbl);

module.exports= routes