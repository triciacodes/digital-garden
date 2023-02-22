import BudSVG from "../../assets/svg/bud.svg";
import BudWideSVG from "../../assets/svg/bud-wide.svg";
import DandelionSVG from "../../assets/svg/dandelion.svg";
import DandelionWideSVG from "../../assets/svg/dandelion-wide.svg";
import DropSVG from "../../assets/svg/drop.svg";
import GrassSVG from "../../assets/svg/grass.svg";
import LeavesFillSVG from "../../assets/svg/leaves-fill.svg";
import LeavesOutlineSVG from "../../assets/svg/leaves-outline.svg";

export const svgOptions = {
  options: [
    "Bud",
    "BudWide",
    "Dandelion",
    "DandelionWide",
    "Drop",
    "Grass",
    "LeavesFill",
    "LeavesOutline",
  ],
  mapping: {
    Bud: <BudSVG />,
    BudWide: <BudWideSVG />,
    Dandelion: <DandelionSVG />,
    DandelionWide: <DandelionWideSVG />,
    Drop: <DropSVG />,
    Grass: <GrassSVG />,
    LeavesFill: <LeavesFillSVG />,
    LeavesOutline: <LeavesOutlineSVG />,
  },
  control: {
    type: "select",
  },
};
