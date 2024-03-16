import app from "../index.js";
import readlineSync from "readline-sync";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const getAnswers = () => {

  const actions = ['+', '-', '*']
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const action = actions[getRandomNumber(0, 2)];
  let correctAnswer = 0

  switch (action) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2
      break;
  }
  correctAnswer = correctAnswer.toString()

  console.log(`Question: ${randomNumber1} ${action} ${randomNumber2}`);
  const answer = readlineSync.question("Your answer: ");
  return { correctAnswer, answer };
};

export default () =>
  app(getAnswers, {
    rules: 'What is the result of the expression?',
  });
