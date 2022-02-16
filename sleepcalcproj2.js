const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 6
    break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 6
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 8
      break;
    default:
      return 'Error'
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  idealHours = 8
  return (idealHours * 7);
}

// console.log(getActualSleepHours());

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('User got the perfect amount of sleep!')
  } else if  (actualSleepHours > idealSleepHours) {
    console.log('User got more sleep than needed!')
  } else {
    console.log('User needs more rest!')
  }
};