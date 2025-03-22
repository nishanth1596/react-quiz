import TitleItems from "../ui/TitleItems";
import htmlIcon from "/icon-html.svg";
import cssIcon from "/icon-css.svg";
import jsIcon from "/icon-js.svg";
import accessIcon from "/icon-accessibility.svg";

const topics = [
  { img: htmlIcon, title: "HTML", color: "var(--color-htmlIconBg)" },
  { img: cssIcon, title: "CSS", color: "var(--color-cssIconBg)" },
  { img: jsIcon, title: "JavaScript", color: "var(--color-jsIconBg)" },
  {
    img: accessIcon,
    title: "Accessibility",
    color: "var(--color-accessibilitIconBg)",
  },
];

function TopicPage() {
  return (
    <section className="mx-6 mt-8 mb-64 md:mx-16 md:mt-16 lg:mx-[8.75rem] lg:mt-[6.19rem] lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-[8.19rem]">
      <div>
        <h1 className="text-[2.5rem] leading-[100%] font-light md:text-[4rem]">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <h2 className="text-GreyNavy dark:text-LighBluish mt-4 text-sm leading-[1.5] italic md:text-xl lg:mt-12">
          Pick a subject to get started.
        </h2>
      </div>

      <div className="mt-10 space-y-3 md:mt-16 md:space-y-6 lg:mt-0">
        {topics.map((item) => (
          <TitleItems key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TopicPage;
