// @flow

import game from '../';

const description = `what is the result of the expression?
(If result is real number, write answer to 2 decimal places.)`;

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

const questionToString = (question : Object) => {
  const { num1, num2, sign } = question;
  return `${num1} ${sign} ${num2}`;
};

const getCorrectAnswer = (question : number) => {
  const { num1, num2, sign } = question;

  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return (num1 / num2).toFixed(2);
    default: break;
  }
};

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
