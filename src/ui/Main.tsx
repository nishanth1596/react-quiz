import { useSelector } from "react-redux";
import QuizPage from "../feature/Quiz/QuizPage";
import TopicPage from "../feature/TopicPage";
import { getStatus } from "../feature/Quiz/quizSlice";
import ResultPage from "../feature/ResultPage";

function Main() {
  const status = useSelector(getStatus);

  return (
    <main>
      {status === "ready" && <TopicPage />}
      {status === "started" && <QuizPage />}
      {status === "completed" && <ResultPage />}
    </main>
  );
}

export default Main;
