import { User } from "./User";
import { Company } from "./Company";
import {} from "googlemaps";
import { Map } from "./Map";

const user = new User();
const company = new Company();
console.log(user, company);
console.log(google);

const map = new Map("map");

map.addMarker(user);
map.addMarker(company);
