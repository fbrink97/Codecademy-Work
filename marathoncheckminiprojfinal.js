let raceNumber = Math.floor(Math.random() * 1000);

// runner registered early.
const registeredEarly = true;

//runners age.

const age = 19

//control flow checking if runner is afult and registered early.

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
};

//control flow checking age and registration time to determine race time.

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`)
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11 am, and your race number is ${raceNumber}.`)
} else if (age < 18) {
  console.log(`You will race at 12:30 pm, and your race number is ${raceNumber}.`)
} else {
  console.log('See registration desk.')
}