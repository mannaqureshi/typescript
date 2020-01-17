"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RouterSingleton = /** @class */ (function () {
    function RouterSingleton() {
    }
    Object.defineProperty(RouterSingleton, "instance", {
        get: function () {
            if (!RouterSingleton._instance) {
                RouterSingleton._instance = express_1.Router();
            }
            return RouterSingleton._instance;
        },
        enumerable: true,
        configurable: true
    });
    return RouterSingleton;
}());
exports.RouterSingleton = RouterSingleton;
