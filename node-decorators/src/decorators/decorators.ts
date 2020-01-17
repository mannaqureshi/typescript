import "reflect-metadata";
import { RequestHandler } from "express";
import { RouterSingleton } from "./router";
import { Request, Response, NextFunction } from "express";

enum HTTPMethods {
  get = "get",
  put = "put",
  post = "post",
  patch = "patch",
  delete = "delete"
}
enum MetaTags {
  path = "path",
  method = "method",
  middlewares = "middlewares",
  validator = "validator"
}

function routeGenerator(method: string) {
  return function(pathName: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaTags.path, pathName, target, key);
      Reflect.defineMetadata(MetaTags.method, method, target, key);
    };
  };
}

export function controller(routePrefix: string) {
  return function(constructorFn: Function) {
    for (const key in constructorFn.prototype) {
      const routeHanlder: RequestHandler = constructorFn.prototype[key];
      const path: string = Reflect.getMetadata(
        MetaTags.path,
        constructorFn.prototype,
        key
      );
      const method: HTTPMethods = Reflect.getMetadata(
        MetaTags.method,
        constructorFn.prototype,
        key
      );
      const middlewares: RequestHandler[] =
        Reflect.getMetadata(
          MetaTags.middlewares,
          constructorFn.prototype,
          key
        ) || [];
      const validatorKeys =
        Reflect.getMetadata(MetaTags.validator, constructorFn.prototype, key) ||
        [];

      const validatorMiddleware = validator(validatorKeys);

      if (path) {
        RouterSingleton.instance[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validatorMiddleware,
          routeHanlder
        );
      }
    }
  };
}

export const get = routeGenerator(HTTPMethods.get);
export const post = routeGenerator(HTTPMethods.post);
export const put = routeGenerator(HTTPMethods.put);
export const del = routeGenerator(HTTPMethods.delete);
export const patch = routeGenerator(HTTPMethods.patch);

export function middlewares(middlewares: RequestHandler[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaTags.middlewares, middlewares, target, key);
  };
}

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaTags.validator, keys, target, key);
  };
}

function validator(keys: string[]) {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.send("Please provide a body to request");
      return;
    }
    for (const key of keys) {
      if (!req.body[key]) {
        res.send(`Please provide valid ${key} propery`);
        return;
      }
    }
    next();
  };
}
