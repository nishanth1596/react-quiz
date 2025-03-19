import { OptionButtonItemProps } from "../../types/types";
import correctIcon from "/icon-correct.svg";
import incorrectIcon from "/icon-incorrect.svg";

function OptionButtonItem({
  optionLabel,
  option,
  index,
  onClick,
  isOptionSelected,
  isSubmitted,
  isOptionCorrect,
  isOptionIncorrect,
}: OptionButtonItemProps) {
  return (
    <button
      onClick={() => onClick(index)}
      className={`text-DarkNavy bg-PureWhite flex w-full cursor-pointer items-center gap-1.5 rounded-xl p-3 text-left text-lg leading-[1] font-medium transition-colors duration-500 ease-in ${isOptionSelected && "activeBtn"} relative`}
    >
      <span className="text-GreyNavy bg-LightGrey rounded-md px-3.5 py-3">
        {optionLabel}
      </span>
      {option}

      {isSubmitted && isOptionCorrect && (
        <img
          src={correctIcon}
          alt="Correct Option"
          className="absolute right-0 mr-3"
        />
      )}

      {isSubmitted && isOptionIncorrect && (
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
