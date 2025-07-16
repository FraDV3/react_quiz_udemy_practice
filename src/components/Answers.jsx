import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  // Store shuffled answers to preserve order between renders
  const shuffledAnswers = useRef();

  // Shuffle answers only once when component mounts
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        // Determine if this answer was selected
        const isSelected = selectedAnswer === answer;

        // Assign CSS class based on answer state
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        // Debug current state
        console.log({ answerState, selectedAnswer });

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              // Disable buttons once an answer has been chosen
              disabled={
                answerState === "answered" ||
                answerState === "correct" ||
                answerState === "wrong"
              }
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
