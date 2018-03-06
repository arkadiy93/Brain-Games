import readlineSync from 'readline-sync';
import getUser from './index';

export default () => {
  console.log('Welcome to the Brain Games! \n Answer "yes" if number even otherwise answer no.');
  const userName = getUser();

  const getRandomInt = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  };

  const getAnswers = () => {
    for (let i = 0; i < 3; i += 1) {
      const randomNum = getRandomInt(1, 100);
      const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${randomNum}`);
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
