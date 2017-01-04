import readlineSync from 'readline-sync';

const start = (name) => {
  const isOdd = num => num % 2 === 0;

  const checkAnswer = (answer) => {
    if (answer !== 'yes' && answer !== 'no') {
      return -1;
    }

    return answer === 'yes';
  };

  let correctAnswer = 0;

  console.log(`${name}, answer "yes" if number odd otherwise answer "no".`);

  while (correctAnswer < 3) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer: ');

    while (checkAnswer(answer) === -1) {
      answer = readlineSync.question(`Please, type 'yes' or 'no': `);
    }

    if (checkAnswer(answer) === isOdd(number)) {
      console.log('Correct!');
      correctAnswer++;
    } else {
      const correct = isOdd(number) ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correct}.
Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default start;
