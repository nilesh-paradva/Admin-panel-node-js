const model = require("../models/panelSchema.js");
const bcrypt = require("bcrypt");
const { log } = require("console");
const fs = require("fs");
const path = require("path");

const HomeController = (req, res) => (res.render("index"));
const bc_buttonController = (req, res) => (res.render("pages/bcbutton"));
const bc_collapse = (req, res) => (res.render("pages/bccollapse"));
const bc_progress = (req, res) => (res.render("pages/bcprogress"));
const bc_tabs = (req, res) => (res.render("pages/bctabs"));
const bc_typography = (req, res) => (res.render("pages/bctypography"));
const bc_badges = (req, res) => (res.render("pages/bcbadges"))
const bc_pagenation = (req, res) => (res.render("pages/bcpagenation"));
const authsignin = (req, res) => ((req.cookies.uid) ? res.redirect("/") : res.render("pages/authsignin"));

const authLogin = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) return res.status(400).json({ message: "Email and password are required." });
        const admin = await model.findOne({ email: req.body.email });
        if (!admin) return res.status(401).json({ message: "Invalid email or password." });
        bcrypt.compare(req.body.password, admin.password, async (err, pass) => {
            if (!err && pass) {
                res.cookie("uid", admin._id, { maxAge: 1000*60*60*24, httpOnly: true, expires: true });
                res.redirect("/");
            } else {
                console.log("log err");
            }
        })

    } catch (err) {
        console.error("Error signing in:", err);
        res.status(500).json({ message: "Internal server error." });
    }
};

const SignOut = (req, res) => (res.clearCookie("uid"), res.redirect("/authsignin"));
const authsignup = (req, res) => ((req.cookies.uid) ? res.redirect("/") : res.render("pages/authsignup"))

const register = async (req, res) => {
    try {
        const { username, email, password, phonenumber, address, dob, gender, language, postalcode, city, state, country, path,status, bio, timezone, membership_level } = req.body;
        if (!username || !email || !password) return console.log("username, email, and password require");
        if (await model.findOne({ email })) return console.log("User already registered");
        bcrypt.hash(password, 12, async (err, PassHash) => {
            if (!err) {
                const newUser = new model({
                    username,
                    email,
                    password: PassHash,
                    phonenumber,
                    address,
                    dob,
                    gender,
                    language,
                    postalcode,
                    city,
                    state,
                    country,
                    path,
                    status,
                    bio,
                    timezone,
                    membership_level
                });

                await newUser.save();
                res.redirect("/authsignin");
            }
        })

    } catch (err) {
        console.log("Signup error:", err);
    }
};

const samplepage = (req, res) => (res.render("pages/samplepage"));
const mapgoogle = (req, res) => (res.render("pages/mapgoogle"));
const formelement = (req, res) => (res.render("pages/formelements"));
const chart = (req, res) => (res.render("pages/chart"));
const tbl = (req, res) => (res.render("pages/tbl"));
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
        
        (user.path) ? fs.unlinkSync(`${user.path}`) : console.error("not delete old image:");
        await model.findByIdAndUpdate(req.params.id, { path: req.file.path }, { new: true });

        res.redirect("/profile");
    } catch (err) {
        console.error("Error uploading image:", err);
    }
};




module.exports = {
    HomeController,
    bc_buttonController,
    bc_collapse,
    bc_progress,
    bc_tabs,
    bc_typography,
    bc_badges,
    bc_pagenation,
    authsignin,
    authLogin,
    SignOut,
    authsignup,
    register,
    samplepage,
    mapgoogle,
    formelement,
    chart,
    tbl,
    profile,
    profileEdit,
    profileImg
}