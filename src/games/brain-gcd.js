import app from "../index.js";
import { getRandomNumber } from "../utils/index.js";

function NOD () {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

const getAnswers = () => {

  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  let correctAnswer = NOD(randomNumber1, randomNumber2).toString()

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  return correctAnswer;
};

export default () =>
  app(getAnswers, {
    rules: 'Find the greatest common divisor of given numbers.',
  });
