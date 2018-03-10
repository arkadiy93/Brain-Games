import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: 'Is this number prime?',

  getRoundQuestion: () => {
    const question = core.getRandomInt(2, 100);
    const answer = gameData.isPrime(question) ? 'yes' : 'no';
    return cons(question, answer);
  },

  isPrime: (number) => {
    const validator = (divisor) => {
      if (number % divisor === 0) {
        return false;
      }
      if (divisor + 1 < number) {
        return validator(divisor + 1);
      }
      return true;
    };
    if (number === 2) return true;
    return validator(2);
  },
};

export default () => {
  core.gameLauncher(gameData);
};
