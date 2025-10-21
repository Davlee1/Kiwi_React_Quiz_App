//import styles from "./QuizPage.module.css";
import Quiz from "../features/Quiz/Quiz.jsx";
import QuizList from  "../features/Quiz/QuizList.jsx";
const QuizPage = function ({ quizList, currentQuiz, startQuiz, clearQuizList, endQuiz}) {
  return currentQuiz !=="" ? (
    <Quiz currentQuiz={currentQuiz} endQuiz={endQuiz}/>
  ) : (
    <>
      <QuizList quizList={quizList} startQuiz={startQuiz} clearQuizList={clearQuizList}/>
      
    </>
  );
};
export default QuizPage;
