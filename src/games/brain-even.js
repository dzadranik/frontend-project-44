import app from "../index.js";
import readlineSync from "readline-sync";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const getAnswers = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question("Your answer: ");
  return { correctAnswer, answer };
};

export default () =>
  app(getAnswers, {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  });
