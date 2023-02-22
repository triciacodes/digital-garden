import type { Meta, StoryObj } from "@storybook/react";

import { FloralGroup } from "./FloralGroup";
import { svgOptions } from "../../utils/storybook/svgOptions";

const positionGroup = {
  table: {
    category: "Position",
  },
};

const meta = {
  title: "Composites/Floral Group",
  component: FloralGroup,
  argTypes: {
    alignment: {
      control: { type: "select" },
      options: ["left", "right", "center", "stretch"],
    },
    gap: {
      control: { type: "range", min: 0, max: 25, step: 1 },
    },
    offsetLeft: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      ...positionGroup,
    },
    offsetRight: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      ...positionGroup,
    },
    offsetTop: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      ...positionGroup,
    },
    offsetBottom: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      ...positionGroup,
    },
    offsetUnit: {
      ...positionGroup,
    },
    quantity: {
      control: { type: "number", min: 1, max: 20, step: 1 },
    },
    svg: {
      ...svgOptions,
    },
  },
  args: {
    alignment: "center",
    color: "var(--color-primary)",
    gap: 3,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetBottom: 0,
    offsetUnit: "%",
    opacity: 1,
    quantity: 5,
    svgWidth: 8,
  },
} satisfies Meta<typeof FloralGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BudGroup: Story = {
  args: {
    svg: "Bud",
  },
};

export const DandelionGroup: Story = {
  args: {
    svg: "Dandelion",
  },
};
