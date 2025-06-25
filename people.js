import fullName from "./names.js";
import hobbies from "./hobbies.js";

function main() {
  console.log(
    fullName("Mario", "Rossi") +
      " | Hobby: " +
      hobbies("informatica", "automobilismo", "giardinaggio").join(", ")
  );
}

main();
