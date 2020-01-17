import faker from "faker";
import { Mappable } from "./mappable.interface";

export class User implements Mappable {
  // just def needs initailization
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    };
  }
}
