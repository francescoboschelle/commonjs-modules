import fullName from "./names.js";
import hobbies from "./hobbies.js";

function main() {
  return {
    name: fullName("Mario", "Rossi"),
    hobbies: hobbies("informatica", "automobilismo", "giardinaggio"),
  };
}

console.log(main());
