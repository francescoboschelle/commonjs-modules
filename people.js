import fullName from "./names.js";
import hobbies from "./hobbies.js";

function main() {
  const name = fullName("Mario", "Rossi");

  return {
    name: name.firstName + " " + name.lastName,
    hobbies: hobbies("informatica", "automobilismo", "giardinaggio"),
  };
}

console.log(main());
