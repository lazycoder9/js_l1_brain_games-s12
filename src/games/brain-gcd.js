// @flow

import game from '../game';

type Question = { num1: number; num2: number };

const description = 'Find the greatest common divisor of given numbers.';

const getRandNum = () => Math.round(Math.random() * 100);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getQuestion = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  return { num1, num2 };
};

const questionToString = (question: Question) => {
  const { num1, num2 } = question;
  return `Question: ${num1} ${num2}`;
};

const getCorrectAnswer = (question: Question) => {
  const { num1, num2 } = question;

  return gcd(num1, num2);
};

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
