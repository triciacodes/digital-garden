import { React } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Garden } from "./Garden";
import { FloralGroup } from "../FloralGroup/FloralGroup";

import BudSVG from "../../assets/svg/bud.svg";
import BudWideSVG from "../../assets/svg/bud-wide.svg";
import DandelionSVG from "../../assets/svg/dandelion.svg";
import DandelionWideSVG from "../../assets/svg/dandelion-wide.svg";
import GrassSVG from "../../assets/svg/grass.svg";
import LeavesFillSVG from "../../assets/svg/leaves-fill.svg";
import LeavesOutlineSVG from "../../assets/svg/leaves-outline.svg";

const meta = {
  title: "Pages/Garden",
  component: Garden,
  argTypes: {
    mixBlendMode: {
      options: [
        "unset",
        "luminosity",
        "color-dodge",
        "screen",
        "exclusion",
        "lighten",
      ],
      control: { type: "select" },
    },
  },
  args: {
    hasGround: false,
    hasGroundDecoration: false,
    hasSky: false,
    isGrowthStaggered: true,
    mixBlendMode: "unset",
  },
} satisfies Meta<typeof Garden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GardenStory: Story = {
  args: {
    groups: [
      <FloralGroup
        color={"var(--color-tertiary)"}
        gap={100}
        offsetLeft={10}
        offsetBottom={-5}
        opacity={0.9}
        quantity={1}
        svg={<DandelionSVG />}
        svgWidth={80}
        svgWidthUnit="%"
      />,
      <FloralGroup
        alignment="left"
        color={"var(--color-primary)"}
        gap={2}
        offsetLeft={-7}
        opacity={0.3}
        quantity={3}
        svg={<LeavesFillSVG />}
        svgWidth={15}
      />,
      <FloralGroup
        alignment="left"
        color={"var(--color-primary)"}
        gap={2}
        offsetLeft={-7}
        quantity={3}
        svg={<LeavesOutlineSVG />}
        svgWidth={15}
      />,
      <FloralGroup
        alignment="right"
        color={"var(--color-primary)"}
        gap={2}
        offsetLeft={1}
        opacity={0.3}
        quantity={1}
        svg={<LeavesFillSVG />}
        svgWidth={20}
      />,
      <FloralGroup
        alignment="right"
        color={"var(--color-quinary)"}
        gap={6}
        offsetLeft={2}
        offsetBottom={-12}
        opacity={0.8}
        quantity={5}
        svg={<GrassSVG />}
        svgWidth={6}
      />,
      <FloralGroup
        alignment="left"
        color={"var(--color-secondary)"}
        gap={5}
        offsetLeft={7}
        quantity={2}
        svgWidth={10}
        svg={<BudWideSVG />}
      />,
      <FloralGroup
        alignment="left"
        color={"var(--color-secondary)"}
        gap={4}
        offsetLeft={54}
        quantity={2}
        svgWidth={10}
        svg={<BudWideSVG />}
      />,
      <FloralGroup
        alignment="right"
        color={"var(--color-tertiary)"}
        offsetLeft={-6}
        opacity={1}
        quantity={1}
        svg={<BudSVG />}
        svgWidth={6}
      />,
      <FloralGroup
        alignment={"right"}
        color={"var(--color-quaternary)"}
        gap={4}
        offsetLeft={-5}
        opacity={0.9}
        quantity={2}
        svg={<DandelionSVG />}
        svgWidth={4}
      />,
      <FloralGroup
        alignment={"left"}
        color={"var(--color-quaternary)"}
        gap={2}
        offsetLeft={4}
        opacity={0.9}
        quantity={4}
        svg={<DandelionSVG />}
        svgWidth={3}
      />,
      <FloralGroup
        alignment={"center"}
        color={"var(--color-quaternary)"}
        gap={1}
        offsetLeft={3}
        opacity={0.9}
        quantity={3}
        svg={<DandelionWideSVG />}
        svgWidth={2}
      />,
    ],
  },
};
GardenStory.storyName = "Garden";
