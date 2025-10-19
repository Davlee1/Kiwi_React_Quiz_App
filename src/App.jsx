import "./App.css";
import {useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router";

//components
import Header from "./shared/Header.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [title, setTitle] = useState("Quiz App");
  const [quizIsStarted, setquizIsStarted] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const updateTitle = () => {
      switch (location.pathname) {
        case "/":
          setTitle("Quiz App");
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

  
  const encodeUrl = useCallback(() => {
    return;
  }, []);
  

const startQuiz = () => {
  setquizIsStarted(true);
}


  return (
    <>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<QuizPage 
        quizIsStarted={quizIsStarted}
        startQuiz = {startQuiz}
        />} />

        <Route path="/about" element={<About />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
