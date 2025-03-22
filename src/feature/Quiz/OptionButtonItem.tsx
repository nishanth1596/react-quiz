import { OptionButtonItemProps } from "../../types/types";
import correctIcon from "/icon-correct.svg";
import incorrectIcon from "/icon-incorrect.svg";

const buttonClass = {
  base: "text-DarkNavy bg-PureWhite flex w-full  items-center gap-4 md:gap-8 rounded-xl md:rounded-3xl p-3 lg:px-5 lg:py-[1.125rem] text-left text-lg md:text-[1.75rem] leading-[1] font-medium transition-colors duration-300 ease-in dropShadow relative  ",
  activeClass: "activeBtn ",
  userOptionCorrect: "border-Green border-[3px] ",
  userOptionIncorrect: "border-Red border-[3px] ",
};

function OptionButtonItem({
  optionLabel,
  option,
  index,
  onClick,
  isOptionSelected,
  isAnswerSubmitted,
  isOptionCorrect,
  isOptionIncorrect,
  correctAnswerOption,
}: OptionButtonItemProps) {
  // 1. tick icon for correct answer - done
  //     -  if userSelectedOption index === answer index => correct Answer

  // 2. (i) wrong icon for incorrect answer only when it has been selected
  //     -  if userSelectedOption index !== answer index => Incorrect Answer

  // (ii) border red also should be there
  // 3. border green, if its a correct answer and no active class - done
  // 4. if nothing is selected but when submit button is pressed display 'select an answer'

  let currentClass = buttonClass.base;

  if (isOptionSelected && !isAnswerSubmitted)
    currentClass += buttonClass.activeClass;

  if (isAnswerSubmitted && isOptionCorrect)
    currentClass = buttonClass.base + buttonClass.userOptionCorrect;

  if (isAnswerSubmitted && isOptionIncorrect)
    currentClass = buttonClass.base + buttonClass.userOptionIncorrect;

  return (
    <button
      disabled={isAnswerSubmitted}
      onClick={() => onClick(index)}
      className={`${currentClass} ${isAnswerSubmitted ? "cursor-not-allowed" : "cursor-pointer"} dark:bg-Navy dark:text-PureWhite transition-all duration-300 ease-in-out hover:mx-4`}
    >
      <span
        className={`${!isOptionSelected && !isOptionCorrect && !isOptionIncorrect && "text-GreyNavy bg-LightGrey"} rounded-md px-3.5 py-3 md:rounded-xl md:px-[18px] md:py-3.5 ${isOptionSelected && !isAnswerSubmitted && "bg-Purple text-PureWhite"} ${isAnswerSubmitted && isOptionCorrect && "bg-Green text-PureWhite"} ${isAnswerSubmitted && isOptionIncorrect && "bg-Red text-PureWhite"}`}
      >
        {optionLabel}
      </span>
      {option}

      {/* tick icon for correct answer */}
      {isAnswerSubmitted &&
        (isOptionCorrect || correctAnswerOption === index) && (
          <img
            src={correctIcon}
            alt="Correct Option"
            className="absolute right-0 mr-3"
          />
        )}

      {/*  2. (i) wrong icon for incorrect answer only when it has been selected (ii) border red also should be there */}
      {isAnswerSubmitted && isOptionIncorrect && (
        <img
          src={incorrectIcon}
          alt="Correct Option"
          className="absolute right-0 mr-3"
        />
      )}
    </button>
  );
}

export default OptionButtonItem;
