const { on } = require("events");
const collectAnswers = require("./lib/collectAnswers");
const questions = [
  "What is your name? ",
  "How old are you? ",
  "Where do you live? ",
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", (answer) =>
  console.log(`Question answered: ${answer}`)
);

answerEvents.on("complete", (answers) => {
  console.log("Thank you for your answers! ");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());
