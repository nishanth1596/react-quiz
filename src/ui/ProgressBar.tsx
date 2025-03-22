import { ProgressBarProps } from "../types/types";

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="dark:bg-Navy mt-10 flex h-4 items-center rounded-full bg-white px-1 lg:mt-0 lg:mb-32">
      <div
        style={{ width: `${progress * 100}%` }}
        className="bg-Purple h-2 rounded-full transition-all duration-300"
      ></div>
    </div>
  );
}

export default ProgressBar;
