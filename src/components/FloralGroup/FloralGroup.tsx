import React from "react";

import { SVGWrapper } from "../SVGWrapper/SVGWrapper";

import { TAlignment, TUnit } from "../../types";

import "./FloralGroup.css";

interface IFloralGroupProps {
  alignment?: TAlignment;
  color?: string;
  gap?: number;
  offsetLeft?: number;
  offsetRight?: number;
  offsetTop?: number;
  offsetBottom?: number;
  offsetUnit?: TUnit;
  opacity?: number;
  quantity: number;
  svg: React.ReactNode;
  svgWidth?: number;
  svgWidthUnit?: TUnit;
}

const alignmentStyle = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
  stretch: "space-between",
};

export const FloralGroup = ({
  alignment = "center",
  color,
  gap,
  offsetLeft = 0,
  offsetRight = 0,
  offsetTop = 0,
  offsetBottom = 0,
  offsetUnit = "%",
  opacity = 1,
  quantity,
  svg,
  svgWidth,
  svgWidthUnit,
}: IFloralGroupProps) => {
  const floralArray = [...Array(quantity).keys()];
  return (
    <div
      className={"floralGroupContainer"}
      style={{
        gap: `${gap}rem`,
        justifyContent: `${alignmentStyle[alignment]}`,
        marginLeft: `${offsetLeft}${offsetUnit}`,
        marginRight: `${offsetRight}${offsetUnit}`,
        marginTop: `${offsetTop}${offsetUnit}`,
        marginBottom: `${offsetBottom}${offsetUnit}`,
        opacity,
      }}
    >
      {floralArray.map(
        (flower): React.ReactNode => (
          <SVGWrapper color={color} width={svgWidth} widthUnit={svgWidthUnit}>
            {svg}
          </SVGWrapper>
        )
      )}
    </div>
  );
};
