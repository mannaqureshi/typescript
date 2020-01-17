import { Request, Response, NextFunction } from "express";
import { controller, get, middlewares } from "../decorators/decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.authenticated) {
    next();
    return;
  }
  res.status(403).send("Not Premited");
}

@controller("")
export class RootController {
  @get("/logout")
  getLogout(req: Request, res: Response, next: NextFunction) {
    req.session = undefined;
    res.redirect("/auth/login");
  }

  @get("/")
  getRoot(req: Request, res: Response, next: NextFunction) {
    let message = "you are not logged in";
    let path = "/auth/login";
    if (req.session && req.session.authenticated) {
      message = "you are logged in";
      path = "/auth/logout";
    }

    res.send(`
      <div>
        <h1>${message}</h1>
        <a href=${path}>${path}</a>
      </div>  
    `);
  }

  @get("/protected")
  @middlewares([requireAuth])
  getProtected(req: Request, res: Response, next: NextFunction) {
    res.send(`welcome to protected route`);
  }
}
