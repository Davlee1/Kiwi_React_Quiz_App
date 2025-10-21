import styles from "./Question.module.css";
import RadioInputWithLabel from "../../shared/RadioInputWithLabel.jsx";

const Question = function ({ QuestionObj, nextQuestion, valueChange }) {
  const question = "Question " + QuestionObj.id + ": " + QuestionObj.question;
  const answerA = QuestionObj.A;
  const answerB = QuestionObj.B;
  const answerC = QuestionObj.C;
  const answerD = QuestionObj.D;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextQuestion();
  }

  return (
    <>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit} className={styles.answers}>
        <RadioInputWithLabel elementId="A" elementValue="a" label={answerA} valueChange={valueChange}/>
        <RadioInputWithLabel elementId="B" elementValue="b" label={answerB} valueChange={valueChange}/>
        <RadioInputWithLabel elementId="C" elementValue="c" label={answerC} valueChange={valueChange}/>
        <RadioInputWithLabel elementId="D" elementValue="d" label={answerD} valueChange={valueChange}/>

        <button type="submit">Next</button>
      </form>
    </>
  );
};
export default Question;
