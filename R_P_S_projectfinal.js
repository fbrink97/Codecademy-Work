const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!');
  }
};
//console.log (getUserChoice('rock'));
//console.log(getUserChoice('Knife'))

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      case 3:
        return 'bomb';
    }
};

//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This round is a tie';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'bomb') {
    if (computerChoice === 'scissors') {
      return 'Bomb has been called the computer lost'
    } else {
      return 'You won!'
    }
  }
};

//console.log(determineWinner('paper', 'rock'));
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();