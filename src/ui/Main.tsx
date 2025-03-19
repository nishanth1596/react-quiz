import { useSelector } from "react-redux";
import QuizPage from "../feature/Quiz/QuizPage";
import TopicPage from "../feature/TopicPage";
import { RootState } from "../store";

function Main() {
  const title = useSelector((store: RootState) => store.quiz.currentTitle);

  return <main>{title ? <QuizPage title={title} /> : <TopicPage />}</main>;
}

export default Main;
