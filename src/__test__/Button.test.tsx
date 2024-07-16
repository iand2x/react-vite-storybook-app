import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import StarIcon from "@mui/icons-material/Star";
import "@testing-library/jest-dom";

test("renders button with title", () => {
  render(<Button title="Test Button" handleClick={undefined} />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test("applies background color", () => {
  render(
    <Button
      title="Colored Button"
      backgroundColor="red"
      handleClick={undefined}
    />
  );
  const buttonElement = screen.getByText(/Colored Button/i);
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("renders icon if provided", () => {
  render(
    <Button
      title="Button with Icon"
      icon={<StarIcon />}
      handleClick={undefined}
    />
  );
  const iconElement = screen.getByRole("img", { name: /home/i });
  expect(iconElement).toBeInTheDocument();
});
