"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.authenticated) {
        next();
        return;
    }
    res.status(403).send("Not Premited");
}
router.get("/", function (req, res, next) {
    var message = "you are not logged in";
    var path = "/login";
    if (req.session && req.session.authenticated) {
        message = "you are logged in";
        path = "/logout";
    }
    res.send("\n    <div>\n      <h1>" + message + "</h1>\n      <a href=" + path + ">" + path + "</a>\n    </div>  \n  ");
});
router.get("/logout", function (req, res, next) {
    req.session = undefined;
    res.redirect("/login");
});
router.get("/login", function (req, res, next) {
    res.send("\n    <form method=\"post\">\n      <label for=\"email\"><b>Username</b></label>\n      <input type=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n      <button type=\"submit\">Login</button>     \n    </form>\n  ");
});
router.post("/login", function (req, res, next) {
    var _a = req.body, password = _a.password, email = _a.email;
    if (email &&
        password &&
        email === "mannaqureshi@gmail.com" &&
        password === "1234567") {
        req.session = {
            authenticated: true
        };
        res.redirect("/");
    }
    else {
        res.send("invalid email or password");
    }
});
router.get("/protected", requireAuth, function (req, res, next) {
    res.send("welcome to protected route");
});
