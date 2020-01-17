"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators/decorators");
function logger(req, res, next) {
    console.log("Yeah baby");
    next();
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res, next) {
        res.send("\n          <form method=\"post\">\n            <label for=\"email\"><b>Username</b></label>\n            <input type=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\n            <label for=\"password\"><b>Password</b></label>\n            <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n            <button type=\"submit\">Login</button>     \n          </form>\n        ");
    };
    LoginController.prototype.getLogout = function (req, res, next) {
        req.session = undefined;
        res.redirect("/auth/login");
    };
    LoginController.prototype.postLogin = function (req, res, next) {
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
    };
    __decorate([
        decorators_1.middlewares([logger]),
        decorators_1.get("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.get("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    __decorate([
        decorators_1.post("/login"),
        decorators_1.bodyValidator("email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    LoginController = __decorate([
        decorators_1.controller("/auth")
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
