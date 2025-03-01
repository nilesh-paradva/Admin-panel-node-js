const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
const SimpleHomeRoute = require("./routes/HomePageRoute.js");
const AuthRoutes = require("./routes/AuthRoute.js");
const ProfileRoute = require("./routes/ProfileRoute");
const BlogRoute = require("./routes/BlogRoute.js")
const cookie = require("cookie-parser")
const db = require("./db/db.js")

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.set('pages', path.join(__dirname, 'pages')); 
app.use(express.static(path.join(__dirname, 'views/pages')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profileimg', express.static(path.join(__dirname, 'profileimg')));

app.use(cookie());
app.use("/", AuthRoutes, SimpleHomeRoute, ProfileRoute, BlogRoute);


app.listen(port, (err) => {
    !err && console.log("server is start", `http://localhost:${port}`);
})