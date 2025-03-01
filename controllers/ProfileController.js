const model = require("../models/AdminSchema");
const fs = require("fs");

const profile = async (req, res) => {res.render("pages/profile")}

const profileEdit = async (req, res) => {
    await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/profile");
};

const profileImg = async (req, res) => {
    try {
        if(!req.file) return console.log("No file uploaded.")
        const user = await model.findById(req.params.id);
        if(!user) return console.log("User not found.");
        
        (user.avatar) ? fs.unlinkSync(`${user.avatar}`) : console.error("not delete old image:");
        await model.findByIdAndUpdate(req.params.id, { avatar: req.file.path }, { new: true });

        res.redirect("/profile");
    } catch (err) {
        console.error("Error uploading image:", err);
    }
};

module.exports = {profile, profileEdit, profileImg}