type DifficultyIconProps = {
  className?: string;
  title?: string;
};

const DifficultyIcon = ({ className, title }: DifficultyIconProps) => {
  return (
    <svg
      id="fi_10760625"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      fill="currentColor"
    >
      {title ? <title>{title}</title> : null}
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="m301.878 506c25.459-37.65 27.805-78.314 7.038-121.994-5.775 23.434-16.339 37.656-31.693 42.669 14.258-40.719 2.344-84.711-35.743-131.976-.822 48.816-12.553 84.376-35.194 106.681-31.19 30.697-30.823 65.341 1.1 103.931-132.518-70.522-151.214-165.106-56.09-283.749 5.9 28.662 20.197 46.259 42.893 52.791-24.739-104.981 1.29-194.432 78.086-268.353.472 164.047 50.777 178.628 114.38 251.855 68.672 87.876 28.316 189.287-84.777 248.145z"
      />
    </svg>
  );
};

export default DifficultyIcon;


