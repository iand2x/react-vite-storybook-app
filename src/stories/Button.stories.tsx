import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button title={""} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Button",
  backgroundColor: "blue",
  size: "small",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "Button with Icon",
  icon: true,
  size: "small",
};
