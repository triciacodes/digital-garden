import type { Meta, StoryObj } from "@storybook/react";

import { GroupWithGround } from "./GroupWithGround";
import { svgOptions } from "../../utils/storybook/svgOptions";

const meta = {
  title: "Composites/Group With Ground",
  component: GroupWithGround,
  argTypes: {
    gap: {
      control: { type: "range", min: 0, max: 10, step: 1 },
    },
    svg: {
      ...svgOptions,
    },
  },
  args: { gap: 1, quantity: 5 },
} satisfies Meta<typeof GroupWithGround>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupWithGroundStory: Story = {
  args: {
    color: "var(--color-primary)",
    svg: "Dandelion",
  },
};
GroupWithGroundStory.storyName = "Group With Ground";
