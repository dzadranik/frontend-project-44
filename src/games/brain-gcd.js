import app from '../index.js';
import getRandomNumber from '../utils/index.js';

function nod(arr) {
  let x = arr[0];
  let y = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    y = arr[i];
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
  const correctAnswer = nod([randomNumber1, randomNumber2]).toString();

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  return correctAnswer;
};

export default () => app(getAnswers, {
  rules: 'Find the greatest common divisor of given numbers.',
});
