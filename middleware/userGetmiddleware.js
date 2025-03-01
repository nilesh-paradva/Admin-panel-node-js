const AdminModel = require("../models/AdminSchema.js");
const BlogModel = require("../models/blogModel.js")

const attachUser = async (req, res, next) => {
    if (req.cookies.uid) {
        user = await AdminModel.findOne({ _id: req.cookies.uid });
        blogUser = await BlogModel.find({authorId:req.cookies.uid});
    } else {
        user = null;
    }
    next();
};

module.exports = attachUser