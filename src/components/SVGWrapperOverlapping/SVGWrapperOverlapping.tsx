import { SVGWrapper, ISVGWrapperProps } from "../SVGWrapper/SVGWrapper";

import "./SVGWrapperOverlapping.css";

type TSVGWrapperOverlappingProps = Pick<
  ISVGWrapperProps,
  "width" | "widthUnit"
> & {
  colors: string[];
  svgs: React.ReactNode[];
};

export const SVGWrapperOverlapping = ({
  colors,
  svgs,
  ...rest
}: TSVGWrapperOverlappingProps) => {
  if (!svgs) return null;

  return (
    <div className="svgWrapperOverlappingContainer">
      {svgs.map((svg, index) => (
        <SVGWrapper color={colors[index]} {...rest}>
          {svg}
        </SVGWrapper>
      ))}
    </div>
  );
};
