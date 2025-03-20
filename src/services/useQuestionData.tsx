import { useQuery } from "@tanstack/react-query";
import { fetchQuizData } from "./quizData";
import { QuizItemProp } from "../types/types";

export function useQuestionData(title: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["quizData"],
    queryFn: fetchQuizData,
  });

  const questionData = data?.quizzes?.find(
    (item: QuizItemProp) => item.title === title,
  ).questions;

  const numQuestions = questionData?.length;

  return { questionData, numQuestions, isLoading };
}
