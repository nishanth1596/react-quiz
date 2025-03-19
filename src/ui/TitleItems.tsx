import { useDispatch } from "react-redux";
import { TitleItemsProps } from "../types/types";
import IconTitle from "./IconTitle";
import { selectTitle } from "../feature/Quiz/quizSlice";

function TitleItems({ item }: TitleItemsProps) {
  const dispatch = useDispatch();
  const { img, color, title } = item;

  return (
    <button
      onClick={() => dispatch(selectTitle(item))}
      aria-label={`Select ${item.title} category`}
      className="dropShadow bg-PureWhite flex w-full cursor-pointer items-center gap-4 p-3"
    >
      <IconTitle img={img} title={title} color={color} />
    </button>
  );
}

export default TitleItems;
