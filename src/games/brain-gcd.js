import app from '../index.js';
import getRandomNumber from '../utils/index.js';

function nod(...args) {
  let x = args[0];
  let y = args[0];
  for (let i = 1; i < args.length; i += 1) {
    y = args[i];
    while (x && y) {
      // eslint-disable-next-line no-unused-expressions
      x > y ? (x %= y) : (y %= x);
    }
    x += y;
  }
  return x;
}

const getAnswers = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const correctAnswer = nod(randomNumber1, randomNumber2).toString();

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  return correctAnswer;
};

export default () => app(getAnswers, {
  rules: 'Find the greatest common divisor of given numbers.',
});
