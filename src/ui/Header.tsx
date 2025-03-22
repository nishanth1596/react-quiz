import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getTheme, toggleTheme } from "../feature/Quiz/quizSlice";

import { AppDispatch, RootState } from "../store";
import ThemeButton from "./ThemeButton";
import IconTitle from "./IconTitle";

import moonDarkIcon from "/icon-moon-dark.svg";
import moonLightIcon from "/icon-moon-light.svg";
import sunDarkIcon from "/icon-sun-dark.svg";
import sunLightIcon from "/icon-sun-light.svg";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const titleData = useSelector((store: RootState) => store.quiz);
  const theme = useSelector(getTheme);

  const isChecked = theme === "light" ? true : false;

  const { img, color, currentTitle: title } = titleData;

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(toggleTheme(e.target.checked));
  }

  return (
    <header className="mx-6 my-4 flex items-center justify-between md:mx-16 md:mt-14 md:mb-0 xl:mx-36 xl:mt-[6.06rem]">
      <output className="flex items-center gap-4 md:gap-6">
        {title ? (
          <IconTitle color={color} img={img} title={title} />
        ) : (
          <div className="invisible h-10 w-10 p-1.5"></div>
        )}
      </output>

      <div className="flex items-center gap-2 md:gap-4">
        <ThemeButton
          onClick={() => dispatch(toggleTheme(false))}
          ariaLabel="Click to change Light theme"
          img={theme === "light" ? sunDarkIcon : sunLightIcon}
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggle"
            className="peer hidden"
            checked={!isChecked}
            onChange={(e) => handleCheckBox(e)}
          />
          <label
            aria-label="click to toggle between light and dark theme"
            htmlFor="toggle"
            className="bg-Purple before:bg-PureWhite relative inline-block h-5 w-8 cursor-pointer rounded-full before:absolute before:m-1 before:h-3 before:w-3 before:rounded-full before:transition-all before:duration-300 before:ease-in-out peer-checked:before:translate-x-3 md:h-7 md:w-12 md:before:h-5 md:before:w-5 md:peer-checked:before:translate-x-5"
          ></label>
        </div>

        <ThemeButton
          onClick={() => dispatch(toggleTheme(true))}
          ariaLabel="Click to change dark theme"
          img={theme === "light" ? moonDarkIcon : moonLightIcon}
        />
      </div>
    </header>
  );
}

export default Header;
