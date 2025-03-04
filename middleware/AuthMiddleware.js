// const authMiddleware = (req, res, next) => ((req.user && req.user._id) ?  next() : res.redirect("/authsignin"));
const authMiddleware = (req, res, next) => ((req.isAuthenticated()) ?  next() : res.redirect("/authsignin"));
module.exports = authMiddleware;