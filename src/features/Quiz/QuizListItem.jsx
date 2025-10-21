import styles from "./QuizListItem.module.css";

const QuizListItem = function ({ title, startQuiz, id }) {
    const handleQuizStart = () =>{
        
        startQuiz(id);
    }
  return (
    <>
      <button className={styles.quiz} onClick={handleQuizStart}>{title}</button>
    </>
  );
};
export default QuizListItem;
