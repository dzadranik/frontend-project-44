import app from "../index.js";
import { getRandomNumber } from "../utils/index.js";

function getProgression() {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 5);
  const progression = [1];
  for (let index = 1; index < progressionLength; index++) {
    progression[index] = progression[index - 1] + progressionStep;
  }
  return progression;
}

const getAnswers = () => {
  const progression = getProgression();
  const hideElem = getRandomNumber(1, progression.length - 1);
  let correctAnswer = progression[hideElem].toString();
  progression.splice(hideElem, 1, "..");

  console.log(`Question: ${progression.join(" ")}`);
  return correctAnswer;
};

export default () =>
  app(getAnswers, {
    rules: "What number is missing in the progression?",
  });
