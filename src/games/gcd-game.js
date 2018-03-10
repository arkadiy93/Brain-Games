import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: 'Find the greatest common divisor of given numbers.',

  getRoundQuestion: () => {
    const ranInt1 = core.getRandomInt(1, 100);
    const ranInt2 = core.getRandomInt(1, 100);
    const question = `${ranInt1}  ${ranInt2}`;
    const answer = String(gameData.findSolution(ranInt1, ranInt2));
    return cons(question, answer);
  },

  findSolution: (num1, num2) => {
    const iter = (x, y) => {
      if (x === 0 || y === 0) {
        return x + y;
      }
      const arg1 = x > y ? x % y : x;
      const arg2 = x > y ? y : y % x;
      return iter(arg1, arg2);
    };
    return iter(num1, num2);
  },
};


export default () => {
  core.gameLauncher(gameData);
};
