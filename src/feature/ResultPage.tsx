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
    <section className="mx-6 mt-8 mb-64 h-screen md:mx-16 md:mt-12 lg:mt-[5.31rem] lg:grid lg:grid-cols-2 lg:gap-x-8 xl:mx-[8.75rem]">
      <h1 className="text-DarkNavy dark:text-PureWhite text-[2.5rem] leading-[1] font-light md:text-[4rem]">
        Quiz Completed <span className="block font-medium">You scored...</span>
      </h1>

      <div>
        <article className="dropShadow dark:bg-Navy mt-10 rounded-xl bg-white py-8 md:mt-16 md:py-12 lg:mt-0">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <img
              className="h-10 rounded-sm p-1.5 md:h-14"
              src={img}
              alt={`${title} Icon`}
              style={{ backgroundColor: color }}
            />
            <p className="text-DarkNavy dark:text-PureWhite text-lg leading-[1] font-medium md:text-[1.75rem]">
              {title}
            </p>
          </div>

          <figure className="text-GreyNavy dark:text-LighBluish mt-4 text-center text-lg leading-[1] font-normal md:mt-10 md:text-2xl">
            <span className="text-DarkNavy dark:text-PureWhite mb-4 block text-[5.5rem] font-medium md:text-[9rem]">
              {points}
            </span>
            <figcaption>out of {numQuestions}</figcaption>
          </figure>
        </article>

        <button
          onClick={() => dispatch(playAgain())}
          className="bg-Purple text-PureWhite leading[1] mt-3 w-full rounded-xl border-0 py-5 text-lg font-medium transition-all duration-300 hover:opacity-50 md:mt-8 md:py-8 md:text-[1.75rem]"
        >
          Play Again
        </button>
      </div>
    </section>
  );
}

export default ResultPage;
