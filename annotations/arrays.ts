const carMakers = ["ford", "toyota", "cheavy"];
const vehicalMakers: string[] = ["ford", "toyota", "cheavy"];

// if empty array we need to define type
const numbers: number[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"]];

const myCar = carMakers.pop();

console.log(
  carMakers.map(car => {
    return car;
  })
);

// flexable types with OR or union
const importantDates: (Date | String)[] = [new Date(), "2030-10-10"];
