const AdminModel = require("../models/AdminSchema.js");
const BlogModel = require("../models/blogModel.js");
const BlogMulter = require("../middleware/BlogImgUpload.js")

const addBlog = (req, res) => {res.render("pages/addBlog")}

const postBlog = async (req, res) => {
    try {
        const { title, Blogdescription } = req.body;
        const NewBlog = new BlogModel({
            title,
            Blogdescription,
            authorId: req.cookies.uid,
            blogImag : req.file.path
        });

        await NewBlog.save();
        res.redirect("/ViewBlog");
    } catch (error) {
        console.error("Error post blog:", error);
    }
};

const ViewBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({});
        const BlogList = blogs.map(async (blog) => {
            const admin = await AdminModel.findOne({ _id: blog.authorId });
            return {...blog.toObject(), admin};
        });

        const AdminBlog = await Promise.all(BlogList); 
        res.render("pages/viewBlog", {AdminBlog});

    } catch (error) {
        console.error("Error blog :", error);
    }
};


module.exports = { addBlog, postBlog, ViewBlog }