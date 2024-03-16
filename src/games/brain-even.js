import app from '../index.js';
import getRandomNumber from '../utils/index.js';

const getAnswers = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

export default () => app(getAnswers, {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
});
