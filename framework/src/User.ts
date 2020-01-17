import { Model } from "./Model";
import { EventEmitter } from "./EventEmitter";
import { Sync } from "./Sync";
import { Arributes } from "./Attributes";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Arributes<UserProps>(attrs),
      new EventEmitter(),
      new Sync<UserProps>(baseURL)
    );
  }
}
