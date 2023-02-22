import type { Meta, StoryObj } from "@storybook/react";

import { SVGWrapperOverlapping } from "./SVGWrapperOverlapping";

import LeavesFillSVG from "../../assets/svg/leaves-fill.svg";
import LeavesOutlineSVG from "../../assets/svg/leaves-outline.svg";

const meta = {
  title: "Components/SVGWrapperOverlapping",
  component: SVGWrapperOverlapping,
  args: { width: 10, widthUnit: "em" },
} satisfies Meta<typeof SVGWrapperOverlapping>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeavesOverlap: Story = {
  args: {
    colors: ["var(--color-tertiary)", "var(--color-primary)"],
    svgs: [<LeavesFillSVG />, <LeavesOutlineSVG />],
  },
};
