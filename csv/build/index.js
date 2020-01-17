"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader("data.csv"));
matchReader.load();
var manUnitedWins = 0;
var HomeWin = MatchReader_1.MatchResult.HomeWin, AwayWin = MatchReader_1.MatchResult.AwayWin;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] == "Man United" && match[5] == HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] == "Man United" && match[5] == AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
// Composition vs Inheritance
// has a vs is a | Relationship
