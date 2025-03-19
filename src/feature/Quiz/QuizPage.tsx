import { useQuery } from "@tanstack/react-query";
import { fetchQuizData } from "../../services/quizData";
import Loader from "../../ui/Loader";
import QuizQuestion from "./QuizQuestion";
import { QuizItemProp, QuizPageProps } from "../../types/types";

function QuizPage({ title }: QuizPageProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["quizData"],
    queryFn: fetchQuizData,
  });

  const questionData = data?.quizzes.find(
    (item: QuizItemProp) => item.title === title,
  ).questions;

  return (
    <section className="relative">
      {isLoading ? <Loader /> : <QuizQuestion questionData={questionData} />}
    </section>
  );
}

export default QuizPage;
