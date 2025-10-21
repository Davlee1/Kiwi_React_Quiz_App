//import styles from "./Quiz.module.css";

import { useState} from "react";
import Question from "./Question.jsx"
import Score from "./Score.jsx"

const Quiz = function ({currentQuiz, endQuiz}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionValue, setQuestionValue] = useState("");
    const [score, setScore] = useState(0);
    const [quizFinished, setquizFinished] = useState(false);
  

  
  let currentQuestion= currentQuiz.q[questionIndex];
  let totalQuestions= currentQuiz.q.length;

  const valueChange = (x) => {
    setQuestionValue(x);
  }

  const nextQuestion = () => {
    if(questionValue === currentQuestion.correct){
      setScore(score + 1);
    }
    
    if(questionIndex < currentQuiz.q.length - 1){
    setQuestionIndex(questionIndex + 1);
    }
    if(questionIndex === currentQuiz.q.length - 1){
      setquizFinished(true);
  }
}
  return quizFinished ?(
<Score total={score} totalQuestions={totalQuestions} endQuiz={endQuiz}/>
  ):(
<>
    <p>{questionIndex + 1}/{totalQuestions}</p>
    <Question QuestionObj={currentQuestion} nextQuestion={nextQuestion} valueChange={valueChange}/>
</>
  );
};
export default Quiz;
