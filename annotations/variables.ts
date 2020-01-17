// primitive types
let apples: number = 0;
let fname: string = "manan";
// cant do this apples = "";
// type inference
let guess = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];

// classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};

// 1st case
const json = `{
    "x": 10,
    "y": 20
  }`;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// 2nd case
let foundWord: boolean;
// let foundWord: boolean;
const words = ["red", "green", "blue "];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element == "green") foundWord = true;
}
// 3rd case
let numbers = [10, -1, 12];
// pipe | OR  statment
let numberAboveZero: boolean | number = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 0) numberAboveZero = element;
}
