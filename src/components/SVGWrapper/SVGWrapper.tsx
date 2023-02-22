import { COLORS } from "../../styles";
import { TUnit } from "../../types";

import "./SVGWrapper.css";

export interface ISVGWrapperProps {
  children?: React.ReactNode;
  color?: string;
  width?: number;
  widthUnit?: TUnit;
}

export const SVGWrapper = ({
  children,
  color = COLORS.gray,
  width,
  widthUnit = "rem",
}: ISVGWrapperProps) => {
  return (
    <div
      className="svgWrapperContainer"
      style={{ color, width: `${width}${widthUnit}` }}
    >
      {children}
    </div>
  );
};
