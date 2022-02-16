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
  idealHours = 6
  return (idealHours * 7);
}

console.log(getActualSleepHours());

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('User got' + (idealSleepHours - actualSleepHours) + ' hours of sleep, you got the perfect amount of sleep!');
  } else if  (actualSleepHours > idealSleepHours) {
    console.log('User got' + (idealSleepHours - actualSleepHours) + ' hours of sleep, you got more sleep than needed!')
  } else {
    console.log('User got ' + (idealSleepHours - actualSleepHours) + ' hours of sleep, you need to get more rest!')
  }
};

calculateSleepDebt();