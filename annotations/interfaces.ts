interface Car {
  name: string;
  year: number;
  isBroken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};
const newCivic = {
  name: "civic",
  year: 2000,
  isBroken: true,
  summary() {
    return `a car`;
  }
};
// very long and duplicaition
const printVehicle = ({
  name,
  year,
  broken
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`${name} ${year} ${broken}`);
};

printVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCivic);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return ``;
  }
};

printSummary(drink);
