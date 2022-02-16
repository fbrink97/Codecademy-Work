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