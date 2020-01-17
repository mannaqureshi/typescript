import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/routes";
import session from "cookie-session";

const app = express();

app.use(express.json());
app.use(bodyParser({ extended: true }));
app.use(session({ secret: "keyboard cat" }));

app.use(router);

app.listen(3000, () => {
  console.log("Server is running");
});
