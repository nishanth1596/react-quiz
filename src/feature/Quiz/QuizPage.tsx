import { useSelector } from "react-redux";
import { useQuestionData } from "../../services/useQuestionData";

import { getTitle } from "./quizSlice";

import Loader from "../../ui/Loader";
import QuizQuestion from "./QuizQuestion";

function QuizPage() {
  const title = useSelector(getTitle);
  const { questionData, isLoading } = useQuestionData(title);

  return (
    <section className="relative">
      {isLoading ? <Loader /> : <QuizQuestion questionData={questionData} />}
    </section>
  );
}

export default QuizPage;
