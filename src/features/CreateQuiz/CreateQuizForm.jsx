/*import styles from "./CreateQuizForm.module.css";*/
import { useState, useEffect } from "react";
import AddQuestion from "./AddQuestion.jsx";

const CreateQuizForm = function ({ updateQuizlist }) {
  const [workingQuiz, setWorkingQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [QuestionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    console.log(workingQuiz);
    console.log(questions);
  }, [workingQuiz, QuestionNumber, questions]);

  const addQuizTitle = (e) => {
    e.preventDefault();

    const quizTitle = e.target.elements.quizTitle.value;
    setWorkingQuiz({ title: quizTitle });
  };

  const addQuestion = (e) => {
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
  };

  const submitQuiz = () => {
    setWorkingQuiz({ ...workingQuiz, ...questions });
    updateQuizlist(workingQuiz);
    setWorkingQuiz({});
    setQuestionNumber(1);
  };
  return workingQuiz.title ? (
    <>
      <AddQuestion questionNumber={QuestionNumber} addQuestion={addQuestion} />

      <button onClick={submitQuiz}>Submit Quiz</button>
    </>
  ) : (
    <>
      <br />
      <br />
      <form onSubmit={addQuizTitle}>
        <label>Quiz Title: </label>
        <input type="text" name="quizTitle"></input>
        <br />
        <br />
        <button type="submit">Next</button>
      </form>
      <br />
    </>
  );
};
export default CreateQuizForm;
