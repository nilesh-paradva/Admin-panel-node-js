const AdminModel = require("../models/AdminSchema");
const bcrypt = require("bcrypt");

const authsignin = (req, res) => (res.render("pages/authsignin"));
const authLogin = async (req, res) => {res.redirect("/")};
const SignOut = (req, res) => (res.clearCookie("uid"), res.redirect("/authsignin"));
const authsignup = (req, res) => (res.render("pages/authsignup"))

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