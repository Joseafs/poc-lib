import type { Meta, StoryObj } from "@storybook/react";
import { ButtonTailwind } from "./index";

const meta: Meta<typeof ButtonTailwind> = {
  title: "Components/ButtonTailwind",
  component: ButtonTailwind,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonTailwind>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    variant: "primary",
    size: "lg",
  },
};
