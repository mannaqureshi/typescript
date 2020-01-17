// decorators modify/ change anything in Class
// Only inside a Class

// class
@classDecorator
class Boat {
  //accessor
  @propertyDecorator
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  //accessor
  // @accessorDecorator
  get formattedColor() {
    return `This boat's color is ${this.color}`;
  }

  // method
  // @logError("Oops boat was sink")
  pilot(@parameterDecorator speed: string, @parameterDecorator name: string) {
    throw new Error();
  }
}
//////////////////////////////////////////////////////////

function classDecorator(constructor: typeof Boat) {
  console.log("Class decorator");
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("Parameter decorator");

  console.log(key, index);
}

// cannot look value as prototype is used
function propertyDecorator(target: any, key: string) {
  console.log("Property decorator");
  console.log(target);
  console.log(key);
}
function accessorDecorator(
  target: any,
  key: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(key);
}

// target is just prototype (no properties)
// decorator factory for configuring parameters
function logError(errorMessage: string) {
  return (target: any, key: string, propertyDescriptor: PropertyDescriptor) => {
    console.log("Method decorator");
    const method = propertyDescriptor.value;
    propertyDescriptor.value = () => {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

// !Example
// testDecorator(Boat.prototype, "pilot");

// !Decorators are only applied when we define class(not when we instantiate an object)

// var _decorate = (decorators, prototype, key or property, desc) => {
//   var desc = Object.getOwnPropertyDescriptor(prototype, key or property);
//   decorators(prototype, key or property, desc);
// };

// writable, enum, value, configurable = Property descriptor
// so we need to call desc to for mutation

new Boat("red");

// 1. propertyDecorator
// 2. accessorDecorator
// 3. parameterDecorator
// 4. methodDecorator
// 5. classDecorator
