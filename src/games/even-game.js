import readlineSync from 'readline-sync';
import * as functions from '../functions';

export const gameQuestion = () => console.log('Answer "yes" if number even otherwise answer "no".');

export const getAnswers = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = functions.getRandomInt(1, 100);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    functions.askQuestion(randomNum);
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