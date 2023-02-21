import type { Meta, StoryObj } from "@storybook/react";

import { SVGWrapper } from "./SVGWrapper";

import bud from "../../assets/svg/bud.svg";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/SVGWrapper",
  component: SVGWrapper,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  args: { children: "yes", width: 40 },
} satisfies Meta<typeof SVGWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <img src={bud} alt="bud" />,
    color: "pink",
  },
};
