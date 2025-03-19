import { IconTitleProps } from "../types/types";

function IconTitle({ img, title, color }: IconTitleProps) {
  return (
    <>
      <img
        src={img}
        alt={`${title} icon`}
        className={`h-10 w-10 rounded-md p-1.5`}
        style={{ backgroundColor: color }}
      />
      <span className="text-lg leading-[1] font-medium">{title}</span>
    </>
  );
}

export default IconTitle;
