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
function requireAuth(req, res, next) {
    if (req.session && req.session.authenticated) {
        next();
        return;
    }
    res.status(403).send("Not Premited");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getLogout = function (req, res, next) {
        req.session = undefined;
        res.redirect("/auth/login");
    };
    RootController.prototype.getRoot = function (req, res, next) {
        var message = "you are not logged in";
        var path = "/auth/login";
        if (req.session && req.session.authenticated) {
            message = "you are logged in";
            path = "/auth/logout";
        }
        res.send("\n      <div>\n        <h1>" + message + "</h1>\n        <a href=" + path + ">" + path + "</a>\n      </div>  \n    ");
    };
    RootController.prototype.getProtected = function (req, res, next) {
        res.send("welcome to protected route");
    };
    __decorate([
        decorators_1.get("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getLogout", null);
    __decorate([
        decorators_1.get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorators_1.get("/protected"),
        decorators_1.middlewares([requireAuth]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorators_1.controller("")
    ], RootController);
    return RootController;
}());
exports.RootController = RootController;
