import type { Meta, StoryObj } from "@storybook/react";

import { OverlappingGroups } from "./OverlappingGroups";

import BudWideSVG from "../../assets/svg/bud-wide.svg";
import DandelionSVG from "../../assets/svg/dandelion.svg";
import LeavesFillSVG from "../../assets/svg/leaves-fill.svg";

import { FloralGroup } from "../FloralGroup/FloralGroup";

const meta = {
  title: "Composites/Overlapping Groups",
  component: OverlappingGroups,
  argTypes: {},
} satisfies Meta<typeof OverlappingGroups>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverlappingGroupsStory: Story = {
  args: {
    groups: [
      <FloralGroup
        color={"var(--color-tertiary)"}
        gap={100}
        offsetLeft={12}
        offsetBottom={-5}
        quantity={1}
        svg={<DandelionSVG />}
        svgWidth={100}
        svgWidthUnit="%"
      />,
      <FloralGroup
        alignment="left"
        color={"var(--color-primary)"}
        gap={2}
        offsetLeft={-10}
        quantity={3}
        svg={<LeavesFillSVG />}
        svgWidth={70}
      />,
      <FloralGroup
        color={"var(--color-secondary)"}
        gap={5}
        offsetLeft={5}
        quantity={3}
        svg={<BudWideSVG />}
        svgWidth={8}
      />,
      <FloralGroup
        alignment={"right"}
        color={"var(--color-quaternary)"}
        gap={4}
        offsetLeft={-5}
        quantity={2}
        svg={<DandelionSVG />}
        svgWidth={3}
      />,
      <FloralGroup
        alignment={"left"}
        color={"var(--color-quaternary)"}
        gap={3}
        offsetLeft={1}
        quantity={3}
        svg={<DandelionSVG />}
        svgWidth={6}
      />,
    ],
  },
};
OverlappingGroupsStory.storyName = "Overlapping Groups";
