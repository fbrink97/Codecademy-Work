// creating ternary expression for username
let userName = '';

userName ? console.log(`Hello, ${username}!`) : console.log('Hello!');

// creating user question lines
const userQuestion = 'Will I make enough money to pay all my debts?';

console.log(`Magic 8 Ball, ${userName} would like to ask: ${userQuestion}`);

// generating random number for 8 ball.
const randomNumber = Math.floor(Math.random() * 8);

// variable for 8 ball
let eightBall = '';

//control flow for eight ball.
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it now'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
  default:
    console.log('ask again.')
};