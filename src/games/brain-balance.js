// @flow

import game from '../';

const balance = (num) => {
  const arr = String(num).split('').map(e => Number(e));
  if (Math.abs(arr[0] - arr[arr.length - 1]) < 2) {
    return num;
  }

  arr[0] += 1;
  arr[arr.length - 1] -= 1;

  return balance(Number(arr.sort().join('')));
};

const description = 'balance the given number';

const getQuestion = () => Math.round(Math.random() * 100000);

const questionToString = (question: number) => `Question: ${question}`;

const getCorrectAnswer = (question: number) => balance(question);

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
