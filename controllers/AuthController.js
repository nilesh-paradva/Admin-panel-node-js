const AdminModel = require("../models/AdminSchema");
const bcrypt = require("bcrypt");

const authsignin = (req, res) => ((req.cookies.uid) ? res.redirect("/") : res.render("pages/authsignin"));

const authLogin = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) return res.status(400).json({ message: "Email and password are required." });
        const admin = await AdminModel.findOne({ email: req.body.email });
        if (!admin) return res.status(401).json({ message: "Invalid email or password." });
        bcrypt.compare(req.body.password, admin.password, async (err, pass) => {
            if (!err && pass) {
                res.cookie("uid", admin._id, { maxAge: 1000*60*60, httpOnly: true, expires: true });
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
        const { username, email, password, phonenumber, address, dob, gender, language, postalcode, city, state, country, avatar,status, bio, timezone, membership_level } = req.body;
        if (!username || !email || !password) return console.log("username, email, and password require");
        if (await AdminModel.findOne({ email })) return console.log("User already registered");
        bcrypt.hash(password, 12, async (err, PassHash) => {
            if (!err) {
                const newUser = new AdminModel({
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
                    avatar,
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

module.exports = {authsignin, authLogin, SignOut, authsignup, register}