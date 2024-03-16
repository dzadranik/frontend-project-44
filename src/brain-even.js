import readlineSync from "readline-sync";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function brainEvenGame() {
  let correctCount = 0;
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctCount < 3) {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (!["yes", "no"].includes(answer)) {
      break;
    }

    if (answer === correctAnswer) {
      correctCount += 1;
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  if (correctCount === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
