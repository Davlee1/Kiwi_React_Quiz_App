//import styles from "./Score.module.css";

const Score = function ({total, totalQuestions, endQuiz}) {
const percentCorrect = (total / totalQuestions)*100;
    
  return (
    <>
  <h2>Results!</h2>
<p>Questions correct: {total}</p>
<p>Total Questions: {totalQuestions}</p>
<p>{percentCorrect}% Correct!</p>
<button onClick={endQuiz}>Go To Home</button>
</>

  );
};
export default Score;