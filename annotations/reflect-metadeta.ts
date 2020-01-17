/*
PROBLEM

function post(routeName: string) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    router.post(routeName, () => {});
  };
}

function use(middleware: any) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    router.recentRouterUpdated(middleware);
  };
}

*/

// meta programming
// can be tied to class, method, propery
import "reflect-metadata";
// class read decorators
// decorators add metas to methods
// all methods run
// class in the end gets all the METHOD KEYS DATA
// adds metas to router

const plane = {
  color: "red"
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("speed", 99, plane);
// adds a key to plane {note: "hi there "} which is invisible

// to add metadata to key

Reflect.defineMetadata("key", "invisble value to color key", plane, "color");

let key1 = Reflect.getMetadata("note", plane);
let key2 = Reflect.getMetadata("speed", plane);
let key3 = Reflect.getMetadata("key", plane, "color");

// console.log(key1, key2, key3);

@printMetadata
class Plane {
  color: string = "red";
  @markFunction("hi there")
  fly() {
    console.log("vrrrrr");
  }
}

function markFunction(secretInfo: string) {
  console.log("method decorator");

  return (target: Plane, key: string) => {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: Function) {
  console.log("class decorator");
  for (const key in target.prototype) {
    let secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
