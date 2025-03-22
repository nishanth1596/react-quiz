import { useDispatch, useSelector } from "react-redux";
import { getPoints, playAgain } from "./Quiz/quizSlice";
import { useQuestionData } from "../services/useQuestionData";

function ResultPage() {
  const {
    currentTitle: title,
    img,
    color,
  } = useSelector((store) => store.quiz);

  const dispatch = useDispatch();

  const { numQuestions } = useQuestionData(title);
  const points = useSelector(getPoints);

  return (
    <section className="mx-6 mt-8 mb-64 h-screen">
      <h1 className="text-DarkNavy dark:text-PureWhite text-[2.5rem] leading-[1] font-light">
        Quiz Completed <span className="block font-medium">You scored...</span>
      </h1>

      <article className="dropShadow dark:bg-Navy mt-10 rounded-xl bg-white py-8">
        <div className="flex items-center justify-center gap-4">
          <img
            className="h-10 rounded-sm p-1.5"
            src={img}
            alt={`${title} Icon`}
            style={{ backgroundColor: color }}
          />
          <p className="text-DarkNavy dark:text-PureWhite text-lg leading-[1] font-medium">
            {title}
          </p>
        </div>

        <p className="text-GreyNavy dark:text-LighBluish mt-4 text-center text-lg leading-[1] font-normal">
          <span className="text-DarkNavy dark:text-PureWhite mb-4 block text-[5.5rem] font-medium">
            {points}
          </span>{" "}
          out of {numQuestions}
        </p>
      </article>

      <button
        onClick={() => dispatch(playAgain())}
        className="bg-Purple text-PureWhite leading[1] mt-3 w-full rounded-xl border-0 py-5 text-lg font-medium transition-all duration-300 hover:opacity-50"
      >
        Play Again
      </button>
    </section>
  );
}

export default ResultPage;
