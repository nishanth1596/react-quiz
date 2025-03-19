import { useDispatch, useSelector } from "react-redux";
import { QuizQuestionProp } from "../../types/types";
import OptionButton from "./OptionButton";
import { useState } from "react";
import {
  getCurrentQuestionIndex,
  getisAnswerSubmitted,
  getPoints,
  nextQuestion,
  selectOption,
} from "./quizSlice";

function QuizQuestion({ questionData }: QuizQuestionProp) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<
    undefined | number
  >();

  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(getCurrentQuestionIndex);
  const isAnswerSubmitted = useSelector(getisAnswerSubmitted);
  const points = useSelector(getPoints);

  const numQuestions = questionData.length;
  const { question, options, answer } = questionData[currentQuestionIndex];

  function handleSelectOption(id: number) {
    setSelectedOptionIndex(id);
  }

  function handleNextQuestion() {
    dispatch(nextQuestion());
    setSelectedOptionIndex(undefined);
  }

  function handleSubmitAnswer() {
    if (!selectedOptionIndex) return;

    const correctAnswerOption = options.indexOf(answer);
    const userSelectedOption = selectedOptionIndex;

    dispatch(selectOption({ correctAnswerOption, userSelectedOption }));
  }

  return (
    <article className="mx-6 mt-8 mb-64">
      <h3 className="text-GreyNavy text-sm leading-[1.5] italic">
        Questions {currentQuestionIndex + 1} of {numQuestions}
      </h3>
      <h4 className="text-DarkNavy mt-3 text-xl leading-[1.2] font-medium">
        {question}
      </h4>

      <OptionButton
        options={options}
        onClick={handleSelectOption}
        selectedOptionIndex={selectedOptionIndex}
        isSubmitted={isAnswerSubmitted}
      />

      <button
        onClick={isAnswerSubmitted ? handleNextQuestion : handleSubmitAnswer}
        className="bg-Purple text-PureWhite mt-8 w-full cursor-pointer rounded-xl py-5 text-lg leading-[1] font-medium"
      >
        {isAnswerSubmitted ? "Next Question" : "Submit Answer"}
      </button>

      {<p>Points : {points}</p>}
    </article>
  );
}

export default QuizQuestion;
