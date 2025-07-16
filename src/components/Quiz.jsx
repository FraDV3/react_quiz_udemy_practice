// Core quiz logic and state management
import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

// Main Quiz component
export default function Quiz() {
  // Store user answers in state
  const [userAnswers, setUserAnswers] = useState([]);

  // Determine which question is currently active
  const activeQuestionIndex = userAnswers.length;

  // Check if the quiz has reached the end
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Handler for selecting an answer
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  // Handler for skipping a question
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // Show summary if all questions are answered
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // Render current question
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
