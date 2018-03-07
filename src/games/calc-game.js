import readlineSync from 'readline-sync';
import * as functions from '../functions';

export const gameQuestion = () => console.log('What is the result of the expression?');


export const getAnswers = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const expression = functions.getExpression();
    functions.askQuestion(expression);
    const correctAnswer = eval(expression);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }
  return true;
};
