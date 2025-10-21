import styles from "./QuizList.module.css";
import QuizListItem from "./QuizListItem.jsx";

const QuizList = function ({ quizList, startQuiz, clearQuizList}) {
  return quizList.length === 0 ? (
    <p className={styles.noQuiz}>Create a quiz to start!</p>
  ) : (
    <>
      <p>Quizes</p>
      <div className={styles.line}></div>
      <div className={styles.quizcontainer}>
      {quizList.map((x) => (
        <QuizListItem key={x.title} id={x} title={x.title} startQuiz={startQuiz} />
      ))}
      </div>
      <div className={styles.line}></div>
      <br />
      <button className={styles.clear} type="button" onClick={clearQuizList}>
        Clear Quizlist
      </button>
    </>
  );
};
export default QuizList;
