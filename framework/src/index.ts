import { User } from "./User";

const user = User.buildUser({ id: 1, name: "adnan" });

user.on("change", () => {
  console.log("User state changed");
});

user.on("save", () => {
  console.log("User saved");
});
user.fetch();

user.save();
