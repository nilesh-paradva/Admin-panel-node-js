const express = require("express");
const BlogRoute = express.Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const BlogImgUpload = require("../middleware/BlogImgUpload");
const AdminGet = require("../middleware/userGetmiddleware");
const BlogControler = require("../controllers/BlogController")

BlogRoute.get("/addBlog", AuthMiddleware, AdminGet, BlogControler.addBlog);
BlogRoute.get("/ViewBlog", AuthMiddleware, AdminGet, BlogControler.ViewBlog)
BlogRoute.post("/addBlog",BlogImgUpload.single("blogImg"),BlogControler.postBlog)

module.exports = BlogRoute