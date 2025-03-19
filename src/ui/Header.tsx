import { useSelector } from "react-redux";
import IconTitle from "./IconTitle";
import moonDarkIcon from "/icon-moon-dark.svg";
import sunDarkIcon from "/icon-sun-dark.svg";
import { RootState } from "../store";

function Header() {
  const titleData = useSelector((store: RootState) => store.quiz);
  const { img, color, currentTitle: title } = titleData;

  return (
    <header className="mx-6 my-4 flex items-center justify-between">
      <output className="flex items-center gap-4">
        {title ? (
          <IconTitle color={color} img={img} title={title} />
        ) : (
          <div className="invisible h-10 w-10 p-1.5"></div>
        )}
      </output>

      <div className="flex items-center gap-2">
        <img src={sunDarkIcon} alt="Light theme Icon" />
        <button aria-label="click to toggle between light and dark theme">
          Toggle
        </button>
        <img src={moonDarkIcon} alt="Dark theme Dark" />
      </div>
    </header>
  );
}

export default Header;
