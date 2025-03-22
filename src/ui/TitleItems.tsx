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
      className="dropShadow bg-PureWhite dark:bg-Navy flex w-full cursor-pointer items-center gap-4 rounded-xl p-3 hover:mx-4 md:gap-8 md:rounded-3xl md:p-5"
    >
      <IconTitle img={img} title={title} color={color} />
    </button>
  );
}

export default TitleItems;
