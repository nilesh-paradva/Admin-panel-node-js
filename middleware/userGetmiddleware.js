const AdminModel = require("../models/AdminSchema.js");
const BlogModel = require("../models/blogModel.js")

const attachUser = async (req, res, next) => {
    if (req.user) {
        user = req.user
        blogUser = await BlogModel.find({authorId:user._id});
    } else {
        user = null;
    }
    next();
};

module.exports = attachUser