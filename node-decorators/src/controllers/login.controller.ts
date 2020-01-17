import { Request, Response, NextFunction } from "express";
import {
  controller,
  get,
  middlewares,
  post,
  bodyValidator
} from "../decorators/decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Yeah baby");
  next();
}

interface Credtentials {
  password?: string;
  email?: string;
}

@controller("/auth")
export class LoginController {
  @middlewares([logger])
  @get("/login")
  getLogin(req: Request, res: Response, next: NextFunction) {
    res.send(`
          <form method="post">
            <label for="email"><b>Username</b></label>
            <input type="email" placeholder="Enter Email" name="email" required>
            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>
            <button type="submit">Login</button>     
          </form>
        `);
  }
  @get("/logout")
  getLogout(req: Request, res: Response, next: NextFunction) {
    req.session = undefined;
    res.redirect("/auth/login");
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response, next: NextFunction) {
    const { password, email }: Credtentials = req.body;
    if (
      email &&
      password &&
      email === "mannaqureshi@gmail.com" &&
      password === "1234567"
    ) {
      req.session = {
        authenticated: true
      };
      res.redirect("/");
    } else {
      res.send("invalid email or password");
    }
  }
}
