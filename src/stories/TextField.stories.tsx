import { Meta, StoryFn } from "@storybook/react";
import TextField from "../components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <TextField label={""} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default TextField",
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: "TextField with Max Length",
  maxLength: 10,
};
