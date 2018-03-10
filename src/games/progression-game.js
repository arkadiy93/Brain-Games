import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: 'What number is missing in this progression?',

  getRoundQuestion: () => {
    const spacing = core.getRandomInt(2, 5);
    const randomPoss = core.getRandomInt(2, 9);
    let initialNum = core.getRandomInt(1, 20);
    let question = String(initialNum);
    let answer = null;
    for (let i = 0; i < 10; i += 1) {
      initialNum += spacing;
      if (i === randomPoss) {
        question += ' ..';
        answer = String(initialNum);
      } else {
        question += ` ${initialNum}`;
      }
    }
    return cons(question, answer);
  },
};

export default () => {
  core.gameLauncher(gameData);
};
