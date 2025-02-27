const authMiddleware = (req, res, next) => ((req.cookies && req.cookies.uid) ?  next() : res.redirect("/authsignin"));
module.exports = authMiddleware;