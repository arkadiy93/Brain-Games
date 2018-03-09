import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: () => 'Balance the given number.',

  getRoundQuestion: () => {
    const question = core.getRandomInt(100, 9999);
    const answer = String(gameData.findSolution(question));
    return cons(question, answer);
  },

  findSolution: (ranNum) => {
    const strNum = String(ranNum);

    const balance = (initialNum) => {
      let numBalanced = '';
      let min = 10;
      let max = 0;
      let minPos = 0;
      let maxPos = 0;

      const setInOrder = (finalString) => {
        const tempArr = finalString.split('');
        tempArr.sort((a, b) => (a - b));
        return tempArr.join('');
      };

      const getMaxMin = () => {
        for (let i = 0; i < initialNum.length; i += 1) {
          if (Number(initialNum[i]) < min) {
            min = initialNum[i];
            minPos = i;
          }
          if (Number(initialNum[i]) > max) {
            max = initialNum[i];
            maxPos = i;
          }
        }
      };

      const getDiff = () => max - min;

      const createBalanced = () => {
        for (let i = 0; i < initialNum.length; i += 1) {
          if (i === minPos) {
            numBalanced += Math.floor(getDiff() / 2) + Number(initialNum[i]);
          } else if (i === maxPos) {
            numBalanced += Number(initialNum[i]) - Math.floor(getDiff() / 2);
          } else {
            numBalanced += initialNum[i];
          }
        }
      };

      getMaxMin();
      if (getDiff() > 1) {
        createBalanced();
        return balance(numBalanced);
      }
      if (getDiff() <= 1) {
        return setInOrder(initialNum);
      }
      return numBalanced;
    };
    return balance(strNum);
  },
};


export default () => {
  core.gameLauncher(gameData);
};
