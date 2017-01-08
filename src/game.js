// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import colors from 'chalk';

export default (description: string,
  getQuestion: Function,
  getCorrectAnswer: Function,
  toStringQuestion: Function) => {
  console.log(colors.blue.bold(`\n${description}\n`));

  let correct = 0;

  while (correct < 3) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(toStringQuestion(question));
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === String(userAnswer)) {
      console.log(colors.green.bold('Correct!\n'));
      correct += 1;
    } else {
      console.log(colors.red(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`));
      return 0;
    }
  }

  return 1;
};
