// @flow

import game from '../game';

type Question = { num1: number; num2: number; sign: string };

const description = `What is the result of the expression?
(If operation is divide, write answer to 2 decimal places.)`;

const getQuestion = () => {
  const randSign = Math.round((Math.random() * 3) + 1);
  let sign = '';

  switch (randSign) {
    case 1: sign = '+'; break;
    case 2: sign = '-'; break;
    case 3: sign = '*'; break;
    case 4: sign = '/'; break;
    default: break;
  }

  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  return { num1, num2, sign };
};

const questionToString = (question: Question) => {
  const { num1, num2, sign } = question;
  return `Question: ${num1} ${sign} ${num2}`;
};

const getCorrectAnswer = (question: Question) => {
  const { num1, num2, sign } = question;
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return (num1 / num2).toFixed(2);
    default: return false;
  }
};

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
