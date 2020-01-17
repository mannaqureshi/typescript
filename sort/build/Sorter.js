"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // instance of for non primitives (constructor function)
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                // type of for primitives
                // else if (typeof this.collection == "string") {}
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
