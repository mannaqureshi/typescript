import { Router } from "express";

export class RouterSingleton {
  private static _instance: Router;
  static get instance(): Router {
    if (!RouterSingleton._instance) {
      RouterSingleton._instance = Router();
    }
    return RouterSingleton._instance;
  }
}
