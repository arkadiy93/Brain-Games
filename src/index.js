import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greetUser = () => console.log('Welcome to the Brain Games!');

const getUsername = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const gameLauncher = (gameData) => {
  greetUser();
  gameData.introQuestion();
  const userName = getUsername();
  const getAnswers = () => {
    for (let i = 0; i < 3; i += 1) {
      const questionData = gameData.getRoundQuestion();
      const question = car(questionData);
      const correctAnswer = cdr(questionData);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
        return false;
      }
    }
    return true;
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
