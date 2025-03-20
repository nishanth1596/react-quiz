import { OptionButtonProps } from "../../types/types";
import OptionButtonItem from "./OptionButtonItem";

function OptionButton({
  options,
  onClick,
  selectedOptionIndex,
  isAnswerSubmitted,
  correctAnswerOption,
}: OptionButtonProps) {
  return (
    <div className="mt-10 space-y-3">
      {options.map((item, index) => (
        <OptionButtonItem
          optionLabel={String.fromCharCode(65 + index)}
          option={item}
          key={index}
          onClick={onClick}
          index={index}
          isAnswerSubmitted={isAnswerSubmitted}
          isOptionSelected={selectedOptionIndex === index}
          isOptionCorrect={
            selectedOptionIndex === index &&
            selectedOptionIndex === correctAnswerOption
          }
          isOptionIncorrect={
            selectedOptionIndex === index &&
            selectedOptionIndex !== correctAnswerOption
          }
          correctAnswerOption={correctAnswerOption}
        />
      ))}
    </div>
  );
}

export default OptionButton;
