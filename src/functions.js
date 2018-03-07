import readlineSync from 'readline-sync';

export const greetUser = () => console.log('Welcome to the Brain Games!');

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

export const getOperator = () => {
  const randomChoice = getRandomInt(0, 3);
  switch (randomChoice) {
    case 0: return '+';
    case 1: return '-';
    default: return '*';
  }
};

export const getExpression = () => `${getRandomInt(1, 10)} ${getOperator()} ${getRandomInt(1, 10)}`;

export const askQuestion = question => console.log(`Question: ${question}`);

export const getUsername = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};
