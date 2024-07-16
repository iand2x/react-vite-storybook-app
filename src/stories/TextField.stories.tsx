import { Meta, StoryFn } from "@storybook/react";
import TextField from "../components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    handleChange: { action: "test text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <TextField handleChange={undefined} label={""} {...args} />
);

export const WithValidations = Template.bind({});
WithValidations.args = {
  label: "TextField with validations",
  placeholder: "Enter username",
  maxLength: 15,
  minLength: 5,
  size: "small",
};
