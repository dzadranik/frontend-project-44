import app from "../index.js";
import { getRandomNumber } from "../utils/index.js";

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getAnswers = () => {
  const randomNumber = getRandomNumber(1, 50);
  const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

export default () =>
  app(getAnswers, {
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  });
