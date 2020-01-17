"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// generics
// define type of a futrue state property, argument and return type
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(path_1.default.resolve(__dirname, "..", this.filename), {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        })
            .map(this.mapRowTypes);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
