const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title : {type : String, required : true},
    Blogdescription : {type : String, required : true},
    blogImag: {type : String, required : true},
    authorId : {type : String, require : true}, 
}, {timestamps : true});

const BlogModel = mongoose.model("Blogs", BlogSchema);
module.exports = BlogModel