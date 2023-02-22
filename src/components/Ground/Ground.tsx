import "./Ground.css";

interface IGroundProps {
  backgroundColor: string;
  hasDecoration?: boolean;
}

export const Ground = ({ backgroundColor, hasDecoration }: IGroundProps) => {
  const decorationClass = hasDecoration ? "groundGradient" : "";
  const classNames = ["groundContainer", `${decorationClass}`].join(" ");

  return <div className={classNames} style={{ backgroundColor }}></div>;
};
