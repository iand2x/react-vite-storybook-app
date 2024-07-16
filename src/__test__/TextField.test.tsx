import { render, screen } from "@testing-library/react";
import TextField from "../components/TextField";
import "@testing-library/jest-dom";

test("renders text field with label", () => {
  render(<TextField label="Name" handleChange={undefined} />);
  const labelElement = screen.getByText(/Name/i);
  expect(labelElement).toBeInTheDocument();
});

test("applies placeholder", () => {
  render(
    <TextField
      label="Name"
      placeholder="Enter your name"
      handleChange={undefined}
    />
  );
  const inputElement = screen.getByPlaceholderText(/Enter your name/i);
  expect(inputElement).toBeInTheDocument();
});

test("applies maxLength and minLength", () => {
  render(
    <TextField
      label="Username"
      maxLength={15}
      minLength={5}
      handleChange={undefined}
    />
  );
  const inputElement = screen.getByLabelText(/Username/i);
  expect(inputElement).toHaveAttribute("maxLength", "15");
  expect(inputElement).toHaveAttribute("minLength", "5");
});
