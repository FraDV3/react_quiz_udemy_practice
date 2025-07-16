import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

// Component that displays a quiz question and handles answer logic
export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) {
  // Track the selected answer and its correctness
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    answerState: null,
  });

  // Determine timer duration based on quiz state
  let timer;

  if (!answer.selectedAnswer) {
    timer = 10000; // full time if no answer yet
  } else if (answer.selectedAnswer && answer.isCorrect === null) {
    timer = 1000; // short delay before showing correct/wrong
  } else if (answer.isCorrect !== null) {
    timer = 2000; // pause to show feedback
  }

  // Handle user answer selection and trigger result display
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  // Derive current answer status for UI feedback
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  // Render the timer, question, and answer options
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
