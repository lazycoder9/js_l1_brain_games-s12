// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import brainEven from './games/brain-even';
import brainCalc from './games/brain-calc';
import brainBalance from './games/brain-balance';
import brainGcd from './games/brain-gcd';
import brainProgression from './games/brain-progression';

const startGame = (num: number) => {
  switch (num) {
    case 1: return brainEven();
    case 2: return brainCalc();
    case 3: return brainBalance();
    case 4: return brainGcd();
    case 5: return brainProgression();
    default: return 0;
  }
};

const askGameNum = () => {
  const options = [0, 1, 2, 3, 4, 5];
  console.log(`1. Brain Even
2. Brain Calc
3. Brain Balance
4. Brain GCD
5. Brain Progression`);
  let gameNum = Number(readlineSync.question('\nType the number of the game that you want to play: '));
  while (!options.includes(gameNum)) {
    gameNum = readlineSync.question('Please, type the correct number: ');
  }

  return gameNum;
};

const retryGame = () => {
  const correctDec = ['YES', 'NO', 'Y', 'N'];
  let decision = '';
  while (!correctDec.includes(decision)) {
    decision = readlineSync.question('\nDo you want to play another game? (y/n): ').toUpperCase();
  }
  return decision === 'YES' || decision === 'Y';
};

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let playerWish = true;

  while (playerWish) {
    const gameNum = askGameNum();
    const success = startGame(gameNum);
    if (success) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}.`);
    }

    playerWish = retryGame();
  }

  console.log(`\nGoodbye, ${name}`);
};
