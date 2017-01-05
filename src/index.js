// @flow
import readlineSync from 'readline-sync';

export default (description : string,
  getQuestion : Function,
  getCorrectAnswer : Function,
  toStringQuestion : Function) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${name}, ${description}`);

  let correct = 0;

  while (correct < 3) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(toStringQuestion(question));
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === String(userAnswer)) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".
Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
