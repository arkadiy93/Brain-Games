import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};
