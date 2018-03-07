import * as functions from './functions';

export default (whichGame) => {
  functions.greetUser();
  whichGame.gameQuestion();
  const userName = functions.getUsername();
  if (whichGame.getAnswers(userName)) {
    console.log(`Congratulations, ${userName}!`);
  }
};
