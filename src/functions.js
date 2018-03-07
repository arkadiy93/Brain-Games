import readlineSync from 'readline-sync';

export const greetUser = () => console.log('Welcome to the Brain Games!');

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

export const getUsername = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const setQuestion = () => {
  const randomChoice = getRandomInt(0, 3);
  const ranInt1 = getRandomInt(1, 10);
  const ranInt2 = getRandomInt(1, 10);
  switch (randomChoice) {
    case 0: {
      console.log(`Question: ${ranInt1} + ${ranInt2}`);
      return (ranInt1 + ranInt2);
    }
    case 1: {
      console.log(`Question: ${ranInt1} - ${ranInt2}`);
      return (ranInt1 - ranInt2);
    }
    default: {
      console.log(`Question: ${ranInt1} * ${ranInt2}`);
      return (ranInt1 * ranInt2);
    }
  }
};
