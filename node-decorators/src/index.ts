import express from "express";
import bodyParser from "body-parser";
import session from "cookie-session";
import "./controllers/login.controller";
import "./controllers/root.controller";

import { RouterSingleton } from "./decorators/router";

const app = express();

app.use(express.json());
app.use(bodyParser({ extended: true }));
app.use(session({ secret: "keyboard cat" }));

app.use(RouterSingleton.instance);

app.listen(3000, () => {
  console.log("Server is running");
});
