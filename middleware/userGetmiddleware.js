const model = require("../models/panelSchema.js");

const attachUser = async (req, res, next) => {
    if (req.cookies.uid) {
        user = await model.findOne({ _id: req.cookies.uid });
    } else {
        user = null;
    }
    next();
};

module.exports = attachUser