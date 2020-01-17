"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var router_1 = require("./router");
var HTTPMethods;
(function (HTTPMethods) {
    HTTPMethods["get"] = "get";
    HTTPMethods["put"] = "put";
    HTTPMethods["post"] = "post";
    HTTPMethods["patch"] = "patch";
    HTTPMethods["delete"] = "delete";
})(HTTPMethods || (HTTPMethods = {}));
var MetaTags;
(function (MetaTags) {
    MetaTags["path"] = "path";
    MetaTags["method"] = "method";
    MetaTags["middlewares"] = "middlewares";
    MetaTags["validator"] = "validator";
})(MetaTags || (MetaTags = {}));
function routeGenerator(method) {
    return function (pathName) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaTags.path, pathName, target, key);
            Reflect.defineMetadata(MetaTags.method, method, target, key);
        };
    };
}
function controller(routePrefix) {
    return function (constructorFn) {
        var _a;
        for (var key in constructorFn.prototype) {
            var routeHanlder = constructorFn.prototype[key];
            var path = Reflect.getMetadata(MetaTags.path, constructorFn.prototype, key);
            var method = Reflect.getMetadata(MetaTags.method, constructorFn.prototype, key);
            var middlewares_1 = Reflect.getMetadata(MetaTags.middlewares, constructorFn.prototype, key) || [];
            var validatorKeys = Reflect.getMetadata(MetaTags.validator, constructorFn.prototype, key) ||
                [];
            var validatorMiddleware = validator(validatorKeys);
            if (path) {
                (_a = router_1.RouterSingleton.instance)[method].apply(_a, __spreadArrays(["" + routePrefix + path], middlewares_1, [validatorMiddleware,
                    routeHanlder]));
            }
        }
    };
}
exports.controller = controller;
exports.get = routeGenerator(HTTPMethods.get);
exports.post = routeGenerator(HTTPMethods.post);
exports.put = routeGenerator(HTTPMethods.put);
exports.del = routeGenerator(HTTPMethods.delete);
exports.patch = routeGenerator(HTTPMethods.patch);
function middlewares(middlewares) {
    return function (target, key, desc) {
        Reflect.defineMetadata(MetaTags.middlewares, middlewares, target, key);
    };
}
exports.middlewares = middlewares;
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetaTags.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
function validator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.send("Please provide a body to request");
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.send("Please provide valid " + key + " propery");
                return;
            }
        }
        next();
    };
}
