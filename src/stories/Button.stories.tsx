import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";
import AppleIcon from "@mui/icons-material/Apple";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "test" },
  },
  parameters: {
    docs: {
      description: {
        component: "A customizable button component.",
      },
      source: {
        code: `<Button title="Click me" />`,
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Button handleClick={undefined} title={""} {...args} />
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "Button with Icon",
  icon: <AppleIcon />,
  size: "small",
};
