import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: 'Balance the given number.',

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
        const checkEachNum = (index) => {
          if (Number(initialNum[index]) < min) {
            min = initialNum[index];
            minPos = index;
          }
          if (Number(initialNum[index]) > max) {
            max = initialNum[index];
            maxPos = index;
          }
          if (index + 1 < initialNum.length) {
            checkEachNum(index + 1);
          }
        };
        checkEachNum(0);
      };

      const getDiff = () => max - min;

      const createBalanced = () => {
        const checkEachNum = (index) => {
          if (index === minPos) {
            numBalanced += Math.floor(getDiff() / 2) + Number(initialNum[index]);
          } else if (index === maxPos) {
            numBalanced += Number(initialNum[index]) - Math.floor(getDiff() / 2);
          } else {
            numBalanced += initialNum[index];
          }
          if (index + 1 < initialNum.length) {
            checkEachNum(index + 1);
          }
        };
        checkEachNum(0);
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
