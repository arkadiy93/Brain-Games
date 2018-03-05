import readlineSync from 'readline-sync';

export const greetingUser = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
}
