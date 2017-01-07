// @flow

import game from '../game';

const balance = (num: number) => {
  const arr = String(num).split('').map(e => Number(e));
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if (Math.abs(min - max) < 2) {
    return arr.sort().join('');
  }

  arr[arr.indexOf(min)] += 1;
  arr[arr.indexOf(max)] -= 1;

  return balance(Number(arr.join('')));
};

const description = 'Balance the given number';

const getQuestion = () => Math.round(Math.random() * 100000);

const questionToString = (question: number) => `Question: ${question}`;

const getCorrectAnswer = (question: number) => balance(question);

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
