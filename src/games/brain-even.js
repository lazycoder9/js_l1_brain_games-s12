// @flow

import game from '../game';

const description = 'Answer "yes" if number odd otherwise answer "no".';

const isOdd = num => num % 2 === 0;

const getQuestion = () => Math.round(Math.random() * 100);

const questionToString = (question: number) => `Question: ${question}`;

const getCorrectAnswer = (question: number) => (isOdd(question) ? 'yes' : 'no');

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
