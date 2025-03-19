import { OptionButtonProps } from "../../types/types";
import OptionButtonItem from "./OptionButtonItem";

function OptionButton({
  options,
  onClick,
  selectedOptionIndex,
  isSubmitted,
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
          isOptionSelected={selectedOptionIndex === index}
          isSubmitted={isSubmitted}
        />
      ))}
    </div>
  );
}

export default OptionButton;
