import { SVGWrapper } from "../SVGWrapper/SVGWrapper";
import CircleSVG from "../../assets/svg/circle.svg";

import "./Sky.css";

interface ISkyProps {
  color: string;
}

export const Sky = ({ color = "var(--color-sky-circle)" }: ISkyProps) => {
  return (
    <div className="skyContainer">
      <SVGWrapper color={color} width={9}>
        <CircleSVG />
      </SVGWrapper>
    </div>
  );
};
