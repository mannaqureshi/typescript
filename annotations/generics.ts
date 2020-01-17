// Without Generics

const add = (a: number, b: number): number => {
  return a + b;
};

add(10, 1);
add(10, 2);
add(10, 3);

// customize function as we use

// for number
class HoldNumber {
  data: number;
}
const holderNumber = new HoldNumber();
holderNumber.data = 123;
// for string
class HoldString {
  data: string;
}
const holderString = new HoldString();
holderString.data = "123as";

// DONOT make a same defination on types. USE GENERICS

class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const numberHolder = new HoldAnything<number>();

const numberString = new HoldAnything<string>();
// typeofdata is replaced with number
// use T as a convection

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// Generic Class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type infernce | auto figures generic type
new ArrayOfAnything(["a", "b"]);

function printStrings(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}
function printNumbers(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}
// after function name
function printAnything<T>(arr: T[]): T {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}

printAnything<number>([1, 2, 3]);

// constraint
interface Printable {
  print(): void;
}

class House implements Printable {
  print(): void {
    console.log("printing");
  }
}
class Car implements Printable {
  print(): void {
    console.log("printing");
  }
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();
  }
}

printHouseOrCar<Car>([new Car(), new Car()]);
printHouseOrCar<House>([new House(), new House()]);
