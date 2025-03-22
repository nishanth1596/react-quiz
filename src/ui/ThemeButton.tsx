type ThemeButtonProps = {
  img: string;
  ariaLabel: string;
  onClick: () => void;
};

function ThemeButton({ img, ariaLabel, onClick }: ThemeButtonProps) {
  return (
    <button className="cursor-pointer" onClick={onClick} aria-label={ariaLabel}>
      <img src={img} alt="" />
    </button>
  );
}

export default ThemeButton;
