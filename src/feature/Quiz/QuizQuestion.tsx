import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { QuizQuestionProp } from "../../types/types";

import {
  getCurrentQuestionIndex,
  getisAnswerSubmitted,
  getIsNoAnswerSelected,
  lastQuestion,
  nextQuestion,
  noAnswerSelected,
  selectOption,
} from "./quizSlice";

import OptionButton from "./OptionButton";
import ProgressBar from "../../ui/ProgressBar";

function QuizQuestion({ questionData }: QuizQuestionProp) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<
    undefined | number
  >();

  const currentQuestionIndex = useSelector(getCurrentQuestionIndex);
  const isAnswerSubmitted = useSelector(getisAnswerSubmitted);

  const isNoAnswerSelected = useSelector(getIsNoAnswerSelected);

  const dispatch = useDispatch();

  const numQuestions = questionData.length;
  const { question, options, answer } = questionData[currentQuestionIndex];

  const correctAnswerOption = options.indexOf(answer);
  const userSelectedOption = selectedOptionIndex;

  function handleSelectOption(id: number) {
    setSelectedOptionIndex(id);
  }

  function handleNextQuestion() {
    if (numQuestions === currentQuestionIndex + 1) {
      dispatch(lastQuestion());
      return;
    }

    dispatch(nextQuestion());
    setSelectedOptionIndex(undefined);
  }

  function handleSubmitAnswer() {
    if (selectedOptionIndex === undefined) return dispatch(noAnswerSelected());

    dispatch(selectOption({ correctAnswerOption, userSelectedOption }));
  }

  return (
    <article className="mx-6 mt-8 mb-64">
      <h3 className="text-GreyNavy dark:text-LighBluish text-sm leading-[1.5] italic">
        Questions {currentQuestionIndex + 1} of {numQuestions}
      </h3>
      <h4 className="text-DarkNavy dark:text-PureWhite mt-3 text-xl leading-[1.2] font-medium">
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
        className="bg-Purple text-PureWhite mt-8 w-full cursor-pointer rounded-xl py-5 text-lg leading-[1] font-medium transition-all duration-300 hover:opacity-50"
      >
        {isAnswerSubmitted ? "Next Question" : "Submit Answer"}
      </button>

      {isNoAnswerSelected && (
        <p className="mt-8 flex items-center justify-center gap-2">
          <img src="/icon-incorrect.svg" alt="" />{" "}
          <span className="text-Red dark:text-PureWhite text-lg leading-6 font-normal">
            Please select an answer
          </span>
        </p>
      )}
    </article>
  );
}

export default QuizQuestion;
