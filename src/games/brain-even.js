// @flow

import game from '../';

const description = 'answer "yes" if number odd otherwise answer "no".';

const isOdd = (num : number) => num % 2 === 0;

const getQuestion = () => Math.round(Math.random() * 100);

const questionToString = question => `Question: ${question}`;

const getCorrectAnswer = question => isOdd(question) ? 'yes' : 'no';

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
