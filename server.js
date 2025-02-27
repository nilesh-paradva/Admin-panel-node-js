const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
const routes = require("./routes/index.js");
const cookie = require("cookie-parser")
const db = require("./db/db.js")

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.set('pages', path.join(__dirname, 'pages')); 
app.use(express.static(path.join(__dirname, 'views/pages')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profileimg', express.static(path.join(__dirname, 'profileimg')));

app.use(cookie());
app.use("/", routes);

app.listen(port, (err) => {
    !err && console.log("server is start", `http://localhost:${port}`);
})