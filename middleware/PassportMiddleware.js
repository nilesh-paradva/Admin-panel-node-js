const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const User = require("../models/AdminSchema");

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      console.log("Logging in user:", username);

      const userFind = await User.findOne({ email: username });
      if (!userFind) return done(null, false);
      
      const isMatch = await bcrypt.compare(password, userFind.password);
      if (!isMatch) return done(null, false);

      return done(null, userFind);

    } catch (err) {
      return done(err);
    }
  })
);

// Serialize user
passport.serializeUser((user, done) => done(null, user.id));

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;