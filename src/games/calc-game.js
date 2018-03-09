import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: () => 'What is the result of the expression?',

  getRoundQuestion: () => {
    const ranOperator = core.getRandomInt(0, 3);
    const ranInt1 = core.getRandomInt(1, 10);
    const ranInt2 = core.getRandomInt(1, 10);
    switch (ranOperator) {
      case 0: {
        const question = `${ranInt1} + ${ranInt2}`;
        const answer = String(ranInt1 + ranInt2);
        return cons(question, answer);
      }
      case 1: {
        const question = `${ranInt1} - ${ranInt2}`;
        const answer = String(ranInt1 - ranInt2);
        return cons(question, answer);
      }
      default: {
        const question = `${ranInt1} * ${ranInt2}`;
        const answer = String(ranInt1 * ranInt2);
        return cons(question, answer);
      }
    }
  },
};

export default () => {
  core.gameLauncher(gameData);
};
