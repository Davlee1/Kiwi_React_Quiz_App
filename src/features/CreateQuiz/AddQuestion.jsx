import styles from "./AddQuestion.module.css";
import TextInputWithLabel from "../../shared/TextInputWithLabel.jsx";

const AddQuestion = function ({ questionNumber, addQuestion }) {
  const questionLabel = "Question " + questionNumber + ":";
  return (
    <form onSubmit={addQuestion} className={styles.addQuestionForm}>
      <div className={styles.question}>
        <TextInputWithLabel
          label={questionLabel}
          elementName="question"
          elementId="question"
        />
      </div>

      <div className={styles.answer}>
        <TextInputWithLabel label="Answer A: " elementName="a" elementId="a" />
      </div>

      <div className={styles.answer}>
        <TextInputWithLabel label="Answer B: " elementName="b" elementId="b" />
      </div>

      <div className={styles.answer}>
        <TextInputWithLabel label="Answer C: " elementName="c" elementId="c" />
      </div>

      <div className={styles.answer}>
        <TextInputWithLabel label="Answer D: " elementName="d" elementId="d" />
      </div>

      <div className={styles.answer}>
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
