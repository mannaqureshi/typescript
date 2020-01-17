"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes/routes");
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(body_parser_1.default({ extended: true }));
app.use(cookie_session_1.default({ secret: "keyboard cat" }));
app.use(routes_1.router);
app.listen(3000, function () {
    console.log("Server is running");
});
