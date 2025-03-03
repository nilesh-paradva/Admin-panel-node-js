// common pages Route
const HomeController = (req, res) =>{res.render("index")};
const bc_buttonController = (req, res) => (res.render("pages/bcbutton"));
const bc_collapse = (req, res) => (res.render("pages/bccollapse"));
const bc_progress = (req, res) => (res.render("pages/bcprogress"));
const bc_tabs = (req, res) => (res.render("pages/bctabs"));
const bc_typography = (req, res) => (res.render("pages/bctypography"));
const bc_badges = (req, res) => (res.render("pages/bcbadges"))
const bc_pagenation = (req, res) => (res.render("pages/bcpagenation"));
const samplepage = (req, res) => (res.render("pages/samplepage"));
const mapgoogle = (req, res) => (res.render("pages/mapgoogle"));
const formelement = (req, res) => (res.render("pages/formelements"));
const chart = (req, res) => (res.render("pages/chart"));
const tbl = (req, res) => (res.render("pages/tbl"));

module.exports = {
    HomeController,
    bc_buttonController,
    bc_collapse,
    bc_progress,
    bc_tabs,
    bc_typography,
    bc_badges,
    bc_pagenation,
    samplepage,
    mapgoogle,
    formelement,
    chart,
    tbl,
}