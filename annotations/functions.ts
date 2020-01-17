// annotations and inference for functions
// only figures return type not arguments

const add = (a: number, b: number): number => {
  return a + b;
};

// we can tell skeleton but no function
// types has nothing to do with logic

const subtract = (a: number, b: number): number => {
  return a - b;
};

// auto decide return type
function divide(a: number, b: number) {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

// this never ends the exectionn
const throwError = (message: string): never => {
  throw new Error(message);
};

// A better approch
const catchError = (message: string) => {
  if (!message) throw new Error(message);
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeatherDestructured = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}) => {
  console.log(date, weather);
};
