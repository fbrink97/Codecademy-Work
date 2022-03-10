let raceNumber = Math.floor(Math.random() * 1000);

// runner registered early.
const registeredEarly = true;

//runners age.

const age = 19

//control flow checking if runner is afult and registered early.

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
};