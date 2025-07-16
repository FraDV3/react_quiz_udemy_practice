// Timer component that visually counts down and triggers an action when time is up
import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  // Track the remaining time in state
  const [remainingTime, setRemainingTime] = useState(timeout);

  // Set timeout to call onTimeout after specified duration
  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  // Update remainingTime every 100ms for visual countdown
  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // Render progress bar with current remaining time
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
