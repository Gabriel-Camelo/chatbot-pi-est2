import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Background from "../components/Background";

test("Renderização", () => {
  render(<Background />);

  const backgroundDiv = screen.getByTestId("background");
  expect(backgroundDiv).toBeInTheDocument();
  expect(backgroundDiv).toHaveClass("bg-ground-img");
});
