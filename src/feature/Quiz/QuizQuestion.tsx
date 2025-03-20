import { useDispatch, useSelector } from "react-redux";
import { QuizQuestionProp } from "../../types/types";
import OptionButton from "./OptionButton";
import { useState } from "react";
import {
  getCurrentQuestionIndex,
  getisAnswerSubmitted,
  getIsNoAnswerSelected,
  getPoints,
  lastQuestion,
  nextQuestion,
  noAnswerSelected,
  selectOption,
} from "./quizSlice";
import ProgressBar from "../../ui/ProgressBar";

function QuizQuestion({ questionData }: QuizQuestionProp) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<
    undefined | number
  >();

  const currentQuestionIndex = useSelector(getCurrentQuestionIndex);
  const isAnswerSubmitted = useSelector(getisAnswerSubmitted);
  const points = useSelector(getPoints);
  const isNoAnswerSelected = useSelector(getIsNoAnswerSelected);

  const dispatch = useDispatch();

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
    if (selectedOptionIndex === undefined) return dispatch(noAnswerSelected());

    const correctAnswerOption = options.indexOf(answer);
    const userSelectedOption = selectedOptionIndex;

    if (numQuestions === currentQuestionIndex + 1) {
      dispatch(lastQuestion({ correctAnswerOption, userSelectedOption }));
      return;
    }

    dispatch(selectOption({ correctAnswerOption, userSelectedOption }));
  }

  const correctAnswerOption = options.indexOf(answer);

  return (
    <article className="mx-6 mt-8 mb-64">
      <h3 className="text-GreyNavy text-sm leading-[1.5] italic">
        Questions {currentQuestionIndex + 1} of {numQuestions}
      </h3>
      <h4 className="text-DarkNavy mt-3 text-xl leading-[1.2] font-medium">
        {question}
      </h4>

      <ProgressBar progress={currentQuestionIndex / numQuestions} />

      <OptionButton
        options={options}
        onClick={handleSelectOption}
        selectedOptionIndex={selectedOptionIndex}
        isAnswerSubmitted={isAnswerSubmitted}
        correctAnswerOption={correctAnswerOption}
      />

      <button
        onClick={isAnswerSubmitted ? handleNextQuestion : handleSubmitAnswer}
        className="bg-Purple text-PureWhite mt-8 w-full cursor-pointer rounded-xl py-5 text-lg leading-[1] font-medium"
      >
        {isAnswerSubmitted ? "Next Question" : "Submit Answer"}
      </button>

      {isNoAnswerSelected && (
        <p className="mt-8 flex items-center justify-center gap-2">
          <img src="/icon-incorrect.svg" alt="" />{" "}
          <span className="text-Red text-2xl leading-6 font-normal">
            Please select an answer
          </span>
        </p>
      )}

      {<p>Points : {points}</p>}
    </article>
  );
}

export default QuizQuestion;
