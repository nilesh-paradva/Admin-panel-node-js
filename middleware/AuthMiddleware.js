const authMiddleware = (req, res, next) => ((req.user && req.user._id) ?  next() : res.redirect("/authsignin"));
module.exports = authMiddleware;