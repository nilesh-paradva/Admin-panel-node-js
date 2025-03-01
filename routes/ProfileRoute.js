const express = require("express");
const ProfileRoute = express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const upload = require("../middleware/ProfileImgUpload");
const ProfileController = require("../controllers/ProfileController");
const AdminGet = require("../middleware/userGetmiddleware")

ProfileRoute.get("/profile", authMiddleware, AdminGet, ProfileController.profile);
ProfileRoute.post("/profileEdit/:id", ProfileController.profileEdit)
ProfileRoute.post("/profileImg/:id", upload.single("profileImg"), ProfileController.profileImg);

module.exports = ProfileRoute