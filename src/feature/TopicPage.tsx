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
    <section className="mx-6 mt-8 mb-64">
      <h1 className="text-[2.5rem] leading-[100%] font-light">
        Welcome to the <span className="font-medium">Frontend Quiz!</span>
      </h1>
      <h2 className="text-GreyNavy dark:text-LighBluish mt-4 text-sm leading-[1.5] italic">
        Pick a subject to get started.
      </h2>

      <div className="mt-10 space-y-3">
        {topics.map((item) => (
          <TitleItems key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TopicPage;
