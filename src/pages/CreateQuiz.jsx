/*import styles from "./QuizPage.module.css";*/
import CreateQuizForm from "../features/CreateQuiz/CreateQuizForm.jsx";
const CreateQuiz = function ({updateQuizlist}) {
  return (
<CreateQuizForm
updateQuizlist={updateQuizlist}
/>
  );
};
export default CreateQuizForm;