import styles from "./QuizPage.module.css";
import Quiz from "../features/Quiz/Quiz.jsx";
const QuizPage = function ({ quizIsStarted, startQuiz}) {
  return quizIsStarted ? (
    <p>Quiz</p>
  ) : (
    <>
      <p>Beginner quiz</p>
      <button type="button" onClick={startQuiz}>Start Quiz!</button>
    </>
  );
};
export default QuizPage;
