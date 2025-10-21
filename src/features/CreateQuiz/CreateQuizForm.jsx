import styles from "./CreateQuizForm.module.css";
import { useState, useEffect } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel.jsx";
import AddQuestion from "./AddQuestion.jsx";

const CreateQuizForm = function ({ updateQuizlist }) {
  const [workingQuiz, setWorkingQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [QuestionNumber, setQuestionNumber] = useState(1);
  //const [questions, setQuestions] = useState("");

  useEffect(() => {
    
    //console.log("current working questions:");
    //console.log(questions);

    //console.log("current working quizlist:");
    //console.log(workingQuiz);
  }, [workingQuiz, QuestionNumber, questions]);

  const addQuizTitle = (e) => {
    e.preventDefault();

    const quizTitle = e.target.elements.quizTitle.value;
    setWorkingQuiz({ title: quizTitle, q: [] });
  };

  const addQuestion =  (e) => {
    
    e.preventDefault();
    const quizQuestion = e.target.elements.question.value;
    const answerA = e.target.elements.a.value;

    const answerB = e.target.elements.b.value;

    const answerC = e.target.elements.c.value;

    const answerD = e.target.elements.d.value;

    const correctAnswer = e.target.elements.CorrectAnswer.value;

    const questionObj = {
      id: QuestionNumber,
      question: quizQuestion,
      A: answerA,
      B: answerB,
      C: answerC,
      D: answerD,
      correct: correctAnswer,
    };

    setQuestions([...questions, questionObj]);
    setQuestionNumber(QuestionNumber + 1);
    
    setWorkingQuiz({ ...workingQuiz, q: [...questions] });
  };

  const cancelQuiz = () => {
    setWorkingQuiz({});
    setQuestionNumber(1);
  };


  const submitQuiz = () => {
    
    setWorkingQuiz({ ...workingQuiz, q: [...questions] });
    updateQuizlist(workingQuiz);
    setWorkingQuiz({});
    setQuestions([]);
    setQuestionNumber(1);
  };
  return workingQuiz.title ? (
    <>
      <AddQuestion questionNumber={QuestionNumber} addQuestion={addQuestion} />

      <button onClick={submitQuiz}>Submit Quiz</button>
      <button className={styles.cancel} onClick={cancelQuiz}>
        Cancel
      </button>
    </>
  ) : (
    <>
      <br />
      <br />
      <form onSubmit={addQuizTitle}>
        <TextInputWithLabel
          label="Quiz Title: "
          elementName="quizTitle"
          elementId="quizTitle"
        />
        <br />
        <button type="submit">Next</button>
      </form>
      <br />
    </>
  );
};
export default CreateQuizForm;
