// @flow
/* eslint-disable no-plusplus */

import game from '../game';

type Question = { progression: Array<number>; emptyPosition: number };

const description = 'What number is missing in this progression?';

const getRandNum = (num: number) => Math.round(Math.random() * num);

const getQuestion = () => {
  const start = getRandNum(9);
  const diff = getRandNum(5) + 2;
  const emptyPosition = getRandNum(9);
  const progression = [];

  for (let i = 0; i < 10; i++) {
    progression.push(start + (diff * i));
  }
  return { progression, emptyPosition };
};

const questionToString = (question: Question) => {
  let result = '';
  const { progression, emptyPosition } = question;

  for (let i = 0; i < progression.length; i++) {
    if (i === emptyPosition) {
      result += '... ';
    } else {
      result += `${progression[i]} `;
    }
  }

  return result;
};

const getCorrectAnswer = (question: Question) => {
  const { progression, emptyPosition } = question;

  return progression[emptyPosition];
};

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
