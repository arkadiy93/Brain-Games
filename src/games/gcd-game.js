import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: () => console.log('Find the greatest common divisor of given numbers.'),

  getRoundQuestion: () => {
    const ranInt1 = core.getRandomInt(1, 100);
    const ranInt2 = core.getRandomInt(1, 100);
    const question = `${ranInt1}  ${ranInt2}`;
    const answer = String(gameData.findSolution(ranInt1, ranInt2));
    return cons(question, answer);
  },

  findSolution: (num1, num2) => {
    const smallNum = num1 < num2 ? num1 : num2;
    const highNum = num1 < num2 ? num2 : num1;
    const iter = (div) => {
      if (highNum % div === 0 && smallNum % div === 0) {
        return div;
      }
      return iter(div - 1);
    };

    return iter(smallNum);
  },
};


export default () => {
  core.gameLauncher(gameData);
};
