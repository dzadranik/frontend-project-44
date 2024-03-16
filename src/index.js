import readlineSync from "readline-sync";

function startGameAndGetName() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}

function stopGame(name, isCorrect) {
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

function app(getAnswers, { rules }) {
  let correctCount = 0;
  const numberOfAttempts = 3;
  const name = startGameAndGetName();

  if (rules) {
    console.log(rules);
  }

  while (correctCount < numberOfAttempts) {
    const correctAnswer = getAnswers();
    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      correctCount += 1;
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      break;
    }
  }

  stopGame(name, correctCount === numberOfAttempts);
}

export default app;
