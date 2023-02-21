import "./SVGWrapper.css";

interface ISVGWrapperProps {
  children?: React.ReactNode;
  color?: string;
  width?: number;
}

export const SVGWrapper = ({ children, color, width }: ISVGWrapperProps) => {
  // const mode = primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";
  return (
    <div
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      style={{ color, width: `${width}px` }}
    >
      {children}
    </div>
  );
};
