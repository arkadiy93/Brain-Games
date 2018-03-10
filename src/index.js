import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greetUser = () => console.log('Welcome to the Brain Games!');

const printQuestion = question => console.log(`${question}`);

const getUsername = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const gameLauncher = (gameData) => {
  greetUser();
  printQuestion(gameData.introQuestion);
  const userName = getUsername();
  const getAnswers = () => {
    const playRounds = (round) => {
      const questionData = gameData.getRoundQuestion();
      const question = car(questionData);
      const correctAnswer = cdr(questionData);
      printQuestion(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
        return false;
      }
      console.log('Correct!');
      if (round < 3) {
        return playRounds(round + 1);
      }
      return true;
    };
    return playRounds(1);
  };
  if (getAnswers()) {
    console.log(`Congratulations, ${userName}!`);
  }
};


export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};
