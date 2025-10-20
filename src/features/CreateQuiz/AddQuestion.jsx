import styles from "./AddQuestion.module.css";

const AddQuestion = function ({ questionNumber, addQuestion }) {
  return (
    <form onSubmit={addQuestion} className={styles.addQuestionForm}>
      <div className={styles.question}>
        <label>Question {questionNumber}: </label>
        <input type="text" name="question" ></input>
      </div>

      <div className={styles.question}>
        <label>Answer A: </label>
        <input type="text" name="a"></input>
      </div>

      <div className={styles.question}>
        <label>Answer B: </label>
        <input type="text" name="b"></input>
      </div>

      <div className={styles.question}>
        <label>Answer C: </label>
        <input type="text" name="c"></input>
      </div>

      <div className={styles.question}>
        <label>Answer D: </label>
        <input type="text" name="d"></input>
      </div>

      <div className={styles.question}>
        <label>Correct Answer: </label>
        <select name="CorrectAnswer">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </div>
      <div className={styles.question}>
        <button type="submit">Add Question</button>
      </div>
    </form>
  );
};
export default AddQuestion;
