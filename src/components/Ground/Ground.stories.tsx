import type { Meta, StoryObj } from "@storybook/react";

import { Ground } from "./Ground";

const meta = {
  title: "Components/Ground",
  component: Ground,
  args: {
    hasDecoration: false,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", display: "flex", alignItems: "flex-end" }}>
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof Ground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroundStory: Story = {
  args: {
    backgroundColor: "var(--ground)",
  },
};
GroundStory.storyName = "Ground";
