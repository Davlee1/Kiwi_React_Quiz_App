import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router";

//components
import Header from "./shared/Header.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import CreateQuiz from "./pages/CreateQuiz.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [title, setTitle] = useState("Quiz App");
  const [currentQuiz, setcurrentQuiz] = useState("");
  const [quizList, setQuizList] = useState(() => {
    // Load the quizlist from Local Storage if it exists
    const savedData = localStorage.getItem("quizlist");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("quizlist", JSON.stringify(quizList));
    //console.log(quizList);
  }, [quizList]);

  const location = useLocation();
  useEffect(() => {
    const updateTitle = () => {
      switch (location.pathname) {
        case "/":
          setTitle("Quiz App");
          break;
        case "/createQuiz":
          setTitle("Create Quiz");
          break;
        case "/about":
          setTitle("About");
          break;
        default:
          setTitle("Page Not Found");
      }
    };
    updateTitle();
  }, [location]);

  const Callback = useCallback(() => {
    return;
  }, []);

  const clearQuizList = () => {
    setQuizList([]);
  };

  const updateQuizlist = (quiz) => {
    setQuizList([...quizList, { ...quiz }]);
  };

  const startQuiz = (x) => {
    setcurrentQuiz(x);
  };

  const endQuiz = () => {
    setcurrentQuiz("");
  }

  return (
    <>
      <Header title={title} />
      <Routes>
        <Route
          path="/"
          element={
            <QuizPage
              quizList={quizList}
              currentQuiz={currentQuiz}
              startQuiz={startQuiz}
              clearQuizList={clearQuizList}
              endQuiz={endQuiz}
            />
          }
        />

        <Route
          path="/createQuiz"
          element={<CreateQuiz updateQuizlist={updateQuizlist} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
