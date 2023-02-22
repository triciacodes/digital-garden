import type { Meta, StoryObj } from "@storybook/react";

import { Sky } from "./Sky";

const meta = {
  title: "Components/Sky",
  component: Sky,
} satisfies Meta<typeof Sky>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkyStory: Story = {
  args: {
    color: "var(--color-sky-circle)",
  },
};
SkyStory.storyName = "Sky";
