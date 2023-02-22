import type { Meta, StoryObj } from "@storybook/react";

import { SVGWrapper } from "./SVGWrapper";

import { decoratorCentered } from "../../utils/storybook/decorators";
import { svgOptions } from "../../utils/storybook/svgOptions";

const meta = {
  title: "Components/SVGWrapper",
  component: SVGWrapper,
  argTypes: {
    children: {
      ...svgOptions,
    },
  },
  args: {
    children: "Bud",
    color: "var(--color-primary)",
    width: 10,
    widthUnit: "em",
  },
  decorators: [(Story) => <div style={decoratorCentered}>{Story()}</div>],
} satisfies Meta<typeof SVGWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bud: Story = {
  args: {
    children: "Bud",
    width: 7,
  },
};

export const BudWide: Story = {
  args: {
    children: "BudWide",
  },
};

export const Dandelion: Story = {
  args: {
    children: "Dandelion",
    width: 8,
  },
};

export const DandelionWide: Story = {
  args: {
    children: "DandelionWide",
  },
};

export const Drop: Story = {
  args: {
    children: "Drop",
  },
};

export const Grass: Story = {
  args: {
    children: "Grass",
    width: 4,
  },
};

export const LeavesFill: Story = {
  args: {
    children: "LeavesFill",
  },
};

export const LeavesOutline: Story = {
  args: {
    children: "LeavesOutline",
  },
};
