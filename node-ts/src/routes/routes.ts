import { Router, Request, Response, NextFunction } from "express";

const router = Router();

interface Credtentials {
  password?: string;
  email?: string;
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.authenticated) {
    next();
    return;
  }
  res.status(403).send("Not Premited");
}

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  let message = "you are not logged in";
  let path = "/login";
  if (req.session && req.session.authenticated) {
    message = "you are logged in";
    path = "/logout";
  }

  res.send(`
    <div>
      <h1>${message}</h1>
      <a href=${path}>${path}</a>
    </div>  
  `);
});

router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.session = undefined;
  res.redirect("/login");
});

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.send(`
    <form method="post">
      <label for="email"><b>Username</b></label>
      <input type="email" placeholder="Enter Email" name="email" required>
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>
      <button type="submit">Login</button>     
    </form>
  `);
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
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
});

router.get(
  "/protected",
  requireAuth,
  (req: Request, res: Response, next: NextFunction) => {
    res.send(`welcome to protected route`);
  }
);

export { router };
